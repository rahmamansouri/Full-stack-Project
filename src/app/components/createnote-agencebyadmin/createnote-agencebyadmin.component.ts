

import { Router } from '@angular/router';
import { AdminapinoteAgenceService } from './../../service/adminapinote-agence.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapiusersService } from './../../service/adminapiusers.service';

import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-createnote-agencebyadmin',
  templateUrl: './createnote-agencebyadmin.component.html',
  styleUrls: ['./createnote-agencebyadmin.component.css']
})
export class CreatenoteAgencebyadminComponent {
  submitted = false;
  noteAgencesForm: FormGroup;
  noteAgence:any = [];
  users:any = [];
  vauesss =  " saisir les données";
//---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

  noteAgencesProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapinoteAgenceService,
    private apiService1: AdminapinoteAgenceService,
    private apiService2: AdminapiusersService,private authService: AuthService
  ) {
    this.mainForm();
    this.readnoteAgence();
    this.readusers();
  }
  readusers(){
    this.apiService2.getuserss().subscribe((data) => {
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



  readnoteAgence(){
    this.apiService.getnoteAgences().subscribe((data) => {
     this.noteAgence = data;
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
    this.noteAgencesForm = this.fb.group({

      agence_id: ['', [Validators.required]],
      note: ['', [Validators.required]],
      datenote: new Date(),
      commentaire: ['', [Validators.required]],


    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.noteAgencesForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.noteAgencesForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.noteAgencesForm.valid) {
      return false;
    } else {
      return this.apiService.createnoteAgence(this.noteAgencesForm.value).subscribe({
        complete: () => {
          this.vauesss="operation realisé avec successs"
          console.log('noteAgences successfully created!'),
          this.vauesss="operation realisé avec successs"
          //this.ngZone.run(() => this.router.navigateByUrl('/adminlistnoteagence'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}