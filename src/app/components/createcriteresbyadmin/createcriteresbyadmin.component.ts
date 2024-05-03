


import { AdminapicriteresService } from './../../service/adminapicriteres.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapihotelsService } from './../../service/adminapihotels.service';
import { mimeType } from './mime-type.validator';
import { FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { AdminapiusersService } from './../../service/adminapiusers.service';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

import { DragdropService } from 'src/app/drag-drop.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';




import { Criteres } from 'src/app/model/criteres';



import { FileUploadService } from './file-upload.service';

  


  
import { Hotels } from './../../model/hotels';



@Component({
  selector: 'app-createcriteresbyadmin',
  templateUrl: './createcriteresbyadmin.component.html',
  styleUrls: ['./createcriteresbyadmin.component.css']
})

export class CreatecriteresbyadminComponent {



    /////////////////////////////////////////////////////////////////////
    POSTS: any;
    page: number = 1;
    count: number = 0;
    tableSize: number = 7;
    tableSizes: any = [3, 6, 9, 12];
  
  ////////////////////////////////////////////////////////////////////////
    onTableDataChange(event: any) {
      this.page = event;
      this.readcriteres();
    }
    onTableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.readcriteres();
    }
  ////////////////////////////////////////////////////////////////////////
  //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------


//---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------


form: FormGroup;
progress: number = 0;

  submitted = false;
  editForm: FormGroup;
  hotelsData: Hotels[];
  hotels: Hotels[];
  hotelsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    vauesss =  " Modifier vos données";
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapihotelsService,
    private router: Router,private authService: AuthService,
    public fileUploadService: FileUploadService,
    private apiServicessss: AdminapicriteresService
  ) {

    this.mainForm();
    this.readcriteres();

    this.editForm = this.fb.group({
      hotel_id: [''],
      critere: [''],
      valeur: [''],
      description: [''],
      avatar: [null],
    });

  }

  readcriteres(){
    this.apiServicessss.getcriteress().subscribe((data) => {
     this.criteres = data;
    })    
  }

  criteres:any = [];
  mainForm() {
    this.editForm = this.fb.group({

      hotel_id: ['', [Validators.required]],
      critere: ['', [Validators.required]],
      valeur: ['', [Validators.required]],
      description: ['', [Validators.required]],


    });
  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.editForm.patchValue({
      avatar: file,
    });
    this.editForm.get('avatar').updateValueAndValidity();
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


   /* this.checkAuth()

    this.userId = this.authService.getUserId()
    this.updatehotels();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.editForm.get('hotel_id').setValue(id);
    this.gethotels(id);
    this.editForm = this.fb.group({
      hotel_id: ['', [Validators.required]],
      critere: ['', [Validators.required]],
      valeur: ['', [Validators.required]],
      description: ['', [Validators.required]],

    });
*/
    
  }
  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  gethotels(id) {
    this.apiService.gethotels(id).subscribe((data) => {
      this.editForm.setValue({
        hotel_id: id,
        critere: '',
        valeur: '',
        description: '',


      });
    });
  }

  updatehotels() {
    this.editForm = this.fb.group({
      hotel_id: ['', [Validators.required]],
      critere: ['', [Validators.required]],
      valeur: ['', [Validators.required]],
      description: ['', [Validators.required]],

    });
  }
  onSubmit() {

    this.fileUploadService
    .addUser(this.editForm.value.hotel_id,this.editForm.value.critere,this.editForm.value.valeur,this.editForm.value.description,
      
      this.editForm.value.avatar)
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
