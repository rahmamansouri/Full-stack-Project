

import { Router } from '@angular/router';
import { AdminapiusersService } from './../../service/adminapiusers.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-createusersbyadmin',
  templateUrl: './createusersbyadmin.component.html',
  styleUrls: ['./createusersbyadmin.component.css']
})
export class CreateusersbyadminComponent {
  submitted = false;
  usersForm: FormGroup;
  usersProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];


  vauesss =  " saisir les données";

//---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapiusersService,private authService: AuthService
  ) {
    this.mainForm();
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
    this.usersForm = this.fb.group({

      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
     password: ['', [Validators.required]],
     role: ['', [Validators.required]],
     profileAnciennete: ['', [Validators.required]],
     profileGamme: ['', [Validators.required]],
     profileFrequence: ['', [Validators.required]],
     profileFamille: ['', [Validators.required]],
     profilePeriode: ['', [Validators.required]],
     profileFidelite: ['', [Validators.required]],
     tel: ['', [Validators.required]],

    });
  }

  //---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------




  // Choose designation with select dropdown
  updateProfile(e) {
    this.usersForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.usersForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.usersForm.valid) {
      return false;
    } else {
      return this.apiService.createusers(this.usersForm.value).subscribe({
        complete: () => {

          console.log('users successfully created!'),
          this.vauesss="operation realisé avec successs"
          //this.ngZone.run(() => this.router.navigateByUrl('/adminlistuser'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}