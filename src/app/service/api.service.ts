


import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BACKEND_URL: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  private posts: Post[] = [];
 
  private postsUpdated = new Subject<Post[]>();
  public err = new BehaviorSubject<any>(null);
  constructor(
    private http: HttpClient, private router: Router
  ) { }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string, imgpath: File, postDate: Date) {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("image", imgpath, title);
    postData.append("postDate", postDate.toString());
    this.http
      .post<{ message: string; post: Post }>(
        this.BACKEND_URL+"/create",
        postData
      )
      .subscribe(responseData => {
        this.err.next(null)
        this.router.navigate(["/"]);


      }),
      err => {
        this.err.next(err)
        console.log(err)
      }
  }

  getPosts() {
    this.http.get<{ message: string; posts: any }>(this.BACKEND_URL)
      .pipe(
        map(postData => {
          return postData.posts.map(post => {
            return {
              title: post.title,
              content: post.content,
              id: post._id,
              imagePath: post.imagePath,
              postDate: post.postDate
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.err.next(null)

        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      },
        err => {
          this.err.next(err)
          console.log(err)
        });
  }

  getPost(id: string) {
    return this.http.get<{
      _id: string, title: string, content: string, imagePath: string
    }>(
      this.BACKEND_URL +"/" + id
    );
  }

  getMyPost(id: string) {
    this.http.get<{ message: string; posts: any }>(
      this.BACKEND_URL + "/mypost"
    ).pipe(
      map(postData => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
            imagePath: post.imagePath,
            postDate: post.postDate
          };
        });
      })
    )
      .subscribe(transformedPosts => {
        this.err.next(null)

        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      },
        err => {
          this.err.next(err)
          console.log(err)
        });
  }


  updatePost(id: string, title: string, content: string, image: File | string) {
    let postData: Post | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
      postData.append("title", title);
      postData.append("content", content);
      postData.append("image", image, title);
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image,
      };
    }
    this.http
      .put(this.BACKEND_URL + "/" +id, postData)
      .subscribe(response => {
        this.err.next(null)
        this.router.navigate(["/myposts"]);
      },
        err => {
          this.err.next(err)
        });
  }

  deletePost(postId: string) {
    this.http
      .delete(this.BACKEND_URL +"/"+ postId)
      .subscribe((data) => {

        this.err.next(null)
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);


      },
        e => {
          console.log(e)
          this.err.next(e)

        });

  }
}
