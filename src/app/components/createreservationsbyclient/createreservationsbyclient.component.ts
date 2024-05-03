


import { Router } from '@angular/router';
import { AdminapireservationsService } from './../../service/adminapireservations.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-createreservationsbyclient',
  templateUrl: './createreservationsbyclient.component.html',
  styleUrls: ['./createreservationsbyclient.component.css']
})
export class CreatereservationsbyclientComponent {
  submitted = false;
  reservationsForm: FormGroup;
  reservationsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];


  vauesss =  "Create reservation :  ";

//---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapireservationsService,private authService: AuthService
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
    this.reservationsForm = this.fb.group({

      agence_id: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
      hotel_id: ['', [Validators.required]],
      date: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      paiement: ['', [Validators.required]],
      remarque: ['', [Validators.required]],

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
    this.reservationsForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.reservationsForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.reservationsForm.valid) {
      return false;
    } else {
      return this.apiService.createreservations(this.reservationsForm.value).subscribe({
        complete: () => {

          console.log('reservations successfully created!'),
          this.vauesss="operation realisé avec successs"
            //this.ngZone.run(() => this.router.navigateByUrl('/clientlistreservation'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}