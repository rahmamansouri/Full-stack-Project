

import { Router } from '@angular/router';
import { AdminapichambresService } from './../../service/adminapichambres.service';
import { AdminapiusersService } from './../../service/adminapiusers.service';

import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { DragdropService } from 'src/app/drag-drop.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-createchambresbyagence',
  templateUrl: './createchambresbyagence.component.html',
  styleUrls: ['./createchambresbyagence.component.css']
})
export class CreatechambresbyagenceComponent {
  submitted = false;
  chambresForm: FormGroup;
  chambresProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
vauesss =  " saisir les données";
//---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

  chambres:any = [];
  users:any = [];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapichambresService,
    private apiService1: AdminapiusersService,private authService: AuthService,
    private sanitizer: DomSanitizer,
    public dragdropService: DragdropService
  ) {
    this.mainForm();
    this.readchambres();
    this.readusers();
  }
  readchambres(){
    this.apiService.getchambress().subscribe((data) => {
     this.chambres = data;
    })    
  }

  readusers(){
    this.apiService1.getuserss().subscribe((data) => {
     this.users = data;
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

      critere: ['', [Validators.required]],


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




    var xx = this.chambresForm.controls['critere'].value;
    if(xx==="1")
    {

      this.router.navigateByUrl('/agencecreateonechambre');
    }
    if(xx==="2")
    {
      this.router.navigateByUrl('/agencecreatetwochambre');

    }
    if(xx==="3")
    {
      this.router.navigateByUrl('/agencecreatethreeechambre');

    }
    if(xx==="4")
    {
      this.router.navigateByUrl('/agencecreatefoourchambre');

    }
    if(xx==="5")
    {
      this.router.navigateByUrl('/agencecreatefivechambre');

    }
    
  }




}






