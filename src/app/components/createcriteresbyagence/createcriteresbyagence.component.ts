

import { Router } from '@angular/router';
import { AdminapicriteresService } from './../../service/adminapicriteres.service';
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
  selector: 'app-createcriteresbyagence',
  templateUrl: './createcriteresbyagence.component.html',
  styleUrls: ['./createcriteresbyagence.component.css']
})
export class CreatecriteresbyagenceComponent {
/////////////////////////////////////////
  fileArr = [];
  imgArr = [];
  fileObj = [];
  form: FormGroup;
  msg: string;
  progress: number = 0;

/////////////////////////////////////////


  submitted = false;
  criteresForm: FormGroup;
  criteresProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

vauesss =  " saisir les données";
//---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

 imagePreview: string
    onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.criteresForm.patchValue({ image: file });
    this.criteresForm.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapicriteresService,private authService: AuthService,
    private sanitizer: DomSanitizer,
    public dragdropService: DragdropService
  ) {
    this.mainForm();
    this.criteresForm = this.fb.group({
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
  this.criteresForm.patchValue({
    avatar: this.fileObj,
  });

  this.criteresForm.get('avatar').updateValueAndValidity();

  // Upload to server
  this.dragdropService
    .addFiles(this.criteresForm.value.avatar)
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


  //---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------




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
    this.criteresForm = this.fb.group({

      hotel_id: ['', [Validators.required]],
      critere: ['', [Validators.required]],
      valeur: ['', [Validators.required]],
      description: ['', [Validators.required]],


    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.criteresForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.criteresForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.criteresForm.valid) {
      return false;
    } else {
      return this.apiService.createcriteres(this.criteresForm.value).subscribe({
        complete: () => {
          console.log('criteres successfully created!'),
          this.vauesss="operation realisé avec successs"
           // this.ngZone.run(() => this.router.navigateByUrl('/agencelistcritere'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}