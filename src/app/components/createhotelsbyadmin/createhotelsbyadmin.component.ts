


import { Router } from '@angular/router';
import { AdminapihotelsService } from './../../service/adminapihotels.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-createhotelsbyadmin',
  templateUrl: './createhotelsbyadmin.component.html',
  styleUrls: ['./createhotelsbyadmin.component.css']
})
export class CreatehotelsbyadminComponent {
  submitted = false;
  hotelsForm: FormGroup;
  hotelsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

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
    private apiService: AdminapihotelsService,private authService: AuthService
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
    this.hotelsForm = this.fb.group({

      name: ['', [Validators.required]],
            adresse: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nbetoile: ['', [Validators.required]],
      promotion: ['', [Validators.required]],


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
    this.hotelsForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.hotelsForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.hotelsForm.valid) {
      return false;
    } else {
      return this.apiService.createhotels(this.hotelsForm.value).subscribe({
        complete: () => {
          console.log('hotels successfully created!'),
          this.vauesss="operation realisé avec successs"
           // this.ngZone.run(() => this.router.navigateByUrl('/adminlisthotel'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}