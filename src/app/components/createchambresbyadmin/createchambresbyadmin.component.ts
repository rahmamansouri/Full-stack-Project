

import { Router } from '@angular/router';
import { AdminapichambresService } from './../../service/adminapichambres.service';
import { AdminapiusersService } from './../../service/adminapiusers.service';

import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { AdminapihotelsService } from './../../service/adminapihotels.service';

import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


import { DragdropService } from 'src/app/drag-drop.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-createchambresbyadmin',
  templateUrl: './createchambresbyadmin.component.html',
  styleUrls: ['./createchambresbyadmin.component.css']
})
export class CreatechambresbyadminComponent {

  fileArr = [];
  imgArr = [];
  fileObj = [];
  form: FormGroup;
  msg: string;
  progress: number = 0;



  submitted = false;
  chambresForm: FormGroup;
  chambresProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
//---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

vauesss =  " saisir les données";
  chambres:any = [];
  users:any = [];
  hotels:any = [];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapichambresService,
    private apiService1: AdminapiusersService,
    private apiService2: AdminapihotelsService,private authService: AuthService,
    private sanitizer: DomSanitizer,
    public dragdropService: DragdropService
  ) {
    this.mainForm();
    this.readchambres();
    this.readusers();
    this.readhotels();
    this.chambresForm = this.fb.group({
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
  this.chambresForm.patchValue({
    avatar: this.fileObj,
  });

  this.chambresForm.get('avatar').updateValueAndValidity();

  // Upload to server
  this.dragdropService
    .addFiles(this.chambresForm.value.avatar)
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

  readhotels(){
    this.apiService2.gethotelss().subscribe((data) => {
     this.hotels = data;
    })    
  }

//---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------



  readchambres(){
    this.apiService.getchambress().subscribe((data) => {
     this.chambres = data;
    })    
  }

  readusers(){
    this.apiService1.getagencessss().subscribe((data) => {
     this.users = data;
    })    
  }


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
    this.chambresForm = this.fb.group({

      agence_id: ['', [Validators.required]],
      hotel_id: ['', [Validators.required]],
      NumChambre: ['', [Validators.required]],
      type: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: "reserved",
      prixAchat: ['', [Validators.required]],
      prixVente: ['', [Validators.required]],

    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.chambresForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.chambresForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.chambresForm.valid) {
      return false;
    } else {
      return this.apiService.createchambres(this.chambresForm.value).subscribe({
        complete: () => {
          console.log('chambres successfully created!'),
          this.vauesss="operation realisé avec successs"
           // this.ngZone.run(() => this.router.navigateByUrl('/adminlistchambre'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}