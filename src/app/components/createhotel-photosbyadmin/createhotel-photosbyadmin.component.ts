

import { Router } from '@angular/router';
import { AdminapihotelPhotosService } from './../../service/adminapihotel-photos.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapihotelsService } from './../../service/adminapihotels.service';

import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


import { mimeType } from './mime-type.validator';

import { DragdropService } from 'src/app/drag-drop.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


import { FileUploadService } from './file-upload.service';


@Component({
  selector: 'app-createhotel-photosbyadmin',
  templateUrl: './createhotel-photosbyadmin.component.html',
  styleUrls: ['./createhotel-photosbyadmin.component.css']
})
export class CreatehotelPhotosbyadminComponent {





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
  hotels:any = [];


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
    private apiService: AdminapihotelPhotosService,
    private apiService1: AdminapihotelsService,private authService: AuthService,
    private sanitizer: DomSanitizer,
    public dragdropService: DragdropService,
    public fileUploadService: FileUploadService
  ) {
    this.mainForm();
    this.readhotels();
    this.hotelPhotosForm = this.fb.group({
      avatar: [null],
    });
  }
  readhotels(){
    this.apiService1.gethotelss().subscribe((data) => {
     this.hotels = data;
    })    
  }

  //---**************************************************************************************
//---**************************************************************************************





uploadFile(event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.hotelPhotosForm.patchValue({
    avatar: file,
  });
  this.hotelPhotosForm.get('avatar').updateValueAndValidity();
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


    this.fileUploadService
      .addhotelsphotos(this.hotelPhotosForm.value.hotel_id,this.hotelPhotosForm.value.type, this.hotelPhotosForm.value.avatar)
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
            console.log('User successfully created!', event.body);
            setTimeout(() => {
              this.progress = 0;
            }, 1500);
        }
      });
  }
}