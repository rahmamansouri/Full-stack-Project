

import { Router } from '@angular/router';
import { AdminapireservationsService } from './../../service/adminapireservations.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdminapiusersService } from './../../service/adminapiusers.service';

import { AdminapihotelsService } from './../../service/adminapihotels.service';

import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-createreservationsbyadmin',
  templateUrl: './createreservationsbyadmin.component.html',
  styleUrls: ['./createreservationsbyadmin.component.css']
})
export class CreatereservationsbyadminComponent {
  submitted = false;
  reservationsForm: FormGroup;
  reservationsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  users:any = [];
  hotels:any = [];


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
    private apiService: AdminapireservationsService,
    private apiService1: AdminapiusersService,
    private apiService2: AdminapihotelsService,private authService: AuthService
  ) {
    this.mainForm();
    this.readusers();
    this.readhotels();
  }

//---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------


  readhotels(){
    this.apiService2.gethotelss().subscribe((data) => {
     this.hotels = data;
    })    
  }



  readusers(){
    this.apiService1.getuserss().subscribe((data) => {
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
          //  this.ngZone.run(() => this.router.navigateByUrl('/adminlistreservation'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}