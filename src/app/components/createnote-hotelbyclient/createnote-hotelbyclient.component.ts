

import { Router } from '@angular/router';
import { AdminapinoteHotelService } from './../../service/adminapinote-hotel.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdminapihotelsService } from './../../service/adminapihotels.service';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-createnote-hotelbyclient',
  templateUrl: './createnote-hotelbyclient.component.html',
  styleUrls: ['./createnote-hotelbyclient.component.css']
})
export class CreatenoteHotelbyclientComponent {


  submitted = false;
  noteHotelsForm: FormGroup;
  noteHotelsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  hotels:any = [];

  vauesss =  "add new review";

//---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapinoteHotelService,
    private apiService2: AdminapihotelsService,private authService: AuthService
  ) {
    this.mainForm();
    this.readhotels();
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



  mainForm() {
    this.noteHotelsForm = this.fb.group({

      hotel_id: ['', [Validators.required]],
      note: ['', [Validators.required]],
      datenote: new Date(),
      commentaire: ['', [Validators.required]],


    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.noteHotelsForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.noteHotelsForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.noteHotelsForm.valid) {
      return false;
    } else {
      return this.apiService.createnoteHotel(this.noteHotelsForm.value).subscribe({
        complete: () => {
          console.log('noteHotels successfully created!'),
          this.vauesss="operation realisé avec successs"
          //  this.ngZone.run(() => this.router.navigateByUrl('/adminlistnotehotel'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}


