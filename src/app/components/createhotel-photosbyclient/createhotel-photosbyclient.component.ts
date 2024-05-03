

import { Router } from '@angular/router';
import { AdminapihotelPhotosService } from './../../service/adminapihotel-photos.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { mimeType } from './mime-type.validator';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

import { DragdropService } from 'src/app/drag-drop.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-createhotel-photosbyclient',
  templateUrl: './createhotel-photosbyclient.component.html',
  styleUrls: ['./createhotel-photosbyclient.component.css']
})
export class CreatehotelPhotosbyclientComponent {

  fileArr = [];
  imgArr = [];
  fileObj = [];
  form: FormGroup;
  msg: string;
  progress: number = 0;

  imagePreview: string

//---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

vauesss =  " saisir les données";
  submitted = false;
  hotelPhotosForm: FormGroup;
  hotelPhotosProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];


    onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.hotelPhotosForm.patchValue({ image: file });
    this.hotelPhotosForm.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


//---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapihotelPhotosService,private authService: AuthService,
    private sanitizer: DomSanitizer,
    public dragdropService: DragdropService
  ) {
    this.mainForm();

    this.hotelPhotosForm = this.fb.group({
      avatar: [null],
    });



  }


  //---**************************************************************************************
//---**************************************************************************************

upload(e) {
  const fileListAsArray = Array.from(e);
  fileListAsArray.forEach((item, i) => {
    const file = e as HTMLInputElement;
    const url = URL.createObjectURL(file[i]);
    this.imgArr.push(url);
    this.fileArr.push({ item, url: url });
  });

  this.fileArr.forEach((item) => {
    this.fileObj.push(item.item);
  });

  // Set files form control
  this.hotelPhotosForm.patchValue({
    avatar: this.fileObj,
  });

  this.hotelPhotosForm.get('avatar').updateValueAndValidity();

  // Upload to server
  this.dragdropService
    .addFiles(this.hotelPhotosForm.value.avatar)
    .subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round((event.loaded / event.total) * 100);
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('File uploaded successfully!', event.body);
          setTimeout(() => {
            this.progress = 0;
            this.fileArr = [];
            this.fileObj = [];
            this.msg = 'File uploaded successfully!';
          }, 3000);
      }
    });
}

// Clean Url
sanitize(url: string) {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}

//---**************************************************************************************
//---**************************************************************************************

  //---------------------oussema




//---------------------oussema




  checkAuth() {
    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {

        this.userIsAuthenticated = isAuthenticated;


      });
  }
//---------------------


  

//---------------------validate
//---------------------deployed
userIsAuthenticated = false;
private authListenerSubs: Subscription;


ngOnInit() {


    this.checkAuth()


    this.userId = this.authService.getUserId()

    
  }
  mainForm() {
    this.hotelPhotosForm = this.fb.group({

      hotel_id: ['', [Validators.required]],
      type: ['', [Validators.required]],
      image: ['', [Validators.required]],


    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.hotelPhotosForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.hotelPhotosForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.hotelPhotosForm.valid) {
      return false;
    } else {
      return this.apiService.createhotelPhotos(this.hotelPhotosForm.value).subscribe({
        complete: () => {
            console.log('hotelPhotos successfully created!'),
            this.vauesss="operation realisé avec successs"
            //this.ngZone.run(() => this.router.navigateByUrl('/clientlisthotelphoto'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}