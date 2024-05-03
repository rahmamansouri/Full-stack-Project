


import { Router } from '@angular/router';
import { AdminapinoteHotelService } from './../../service/adminapinote-hotel.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-createnote-hotelbyagence',
  templateUrl: './createnote-hotelbyagence.component.html',
  styleUrls: ['./createnote-hotelbyagence.component.css']
})
export class CreatenoteHotelbyagenceComponent {

  submitted = false;
  noteHotelsForm: FormGroup;
  noteHotelsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

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
    private apiService: AdminapinoteHotelService,private authService: AuthService
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
    this.noteHotelsForm = this.fb.group({

      hotel_id: ['', [Validators.required]],
      note: ['', [Validators.required]],
      datenote: ['', [Validators.required]],
      commentaire: ['', [Validators.required]],


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
           // this.ngZone.run(() => this.router.navigateByUrl('/agencelistnotehotel'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}


