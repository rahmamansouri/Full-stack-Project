







import { Router } from '@angular/router';
import { AdminapireservationDetailsService } from './../../service/adminapireservation-details.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdminapireservationsService } from './../../service/adminapireservations.service';
import { AdminapichambresService } from './../../service/adminapichambres.service';

import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-agencecreatedetailreservation4children',
  templateUrl: './agencecreatedetailreservation4children.component.html',
  styleUrls: ['./agencecreatedetailreservation4children.component.css']
})
export class Agencecreatedetailreservation4childrenComponent {




  submitted = false;
  reservationDetailsForm: FormGroup;
  reservationDetailsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  vauesss =  " saisir les données";

//---------------------------------------------------------------

  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------






  reservations:any = [];
  chambres:any = [];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: AdminapireservationDetailsService,
    private apiService1: AdminapireservationsService,
    private apiService2: AdminapichambresService,private authService: AuthService
  ) {
    this.mainForm();
    this.readreservations();
    this.readchambres();
  }


//---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------



    
  updateProfilesssss(e ) {

    var xx = this.reservationDetailsForm.controls['NbrEnfant'].value;
    if(xx==="1")
    {

      this.router.navigateByUrl('/Agencecreatedetailreservation1childrenComponent');
    }
    if(xx==="2")
    {
      this.router.navigateByUrl('/Agencecreatedetailreservation2childrenComponent');

    }
    if(xx==="3")
    {
      this.router.navigateByUrl('/Agencecreatedetailreservation3childrenComponent');

    }
    if(xx==="4")
    {
      this.router.navigateByUrl('/Agencecreatedetailreservation4childrenComponent');

    }
    if(xx==="5")
    {
      this.router.navigateByUrl('/Agencecreatedetailreservation5childrenComponent');

    }
    if(xx==="6")
    {
      this.router.navigateByUrl('/Agencecreatedetailreservation6childrenComponent');

    }
if(xx==="7")
    {
      this.router.navigateByUrl('/Agencecreatedetailreservation7childrenComponent');

    }
if(xx==="8")
    {
      this.router.navigateByUrl('/Agencecreatedetailreservation8childrenComponent');

    }
if(xx==="9")
    {
      this.router.navigateByUrl('/Agencecreatedetailreservation9childrenComponent');

    }



  }






  readreservations(){
    this.apiService1.getreservationss().subscribe((data) => {
     this.reservations = data;
    })    
  }

  readchambres(){
    this.apiService2.getchambress().subscribe((data) => {
     this.chambres = data;
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
    this.reservationDetailsForm = this.fb.group({

      reservation_id: ['', [Validators.required]],
      chambre_id: ['', [Validators.required]],
      NbrAdulte: ['', [Validators.required]],
      NbrEnfant: ['', [Validators.required]],
      NbrBebe: ['', [Validators.required]],
      ageenfant: ['', [Validators.required]],




      ageenfant2: ['', [Validators.required]],
      ageenfant3: ['', [Validators.required]],
      ageenfant4: ['', [Validators.required]],

      debut: ['', [Validators.required]],
      fin: ['', [Validators.required]],
      demandeSpeciale: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      remarque: ['', [Validators.required]],
      nbjours: ['', [Validators.required]],


    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.reservationDetailsForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.reservationDetailsForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.reservationDetailsForm.valid) {
      return false;
    } else {
      return this.apiService.createreservationDetails1(this.reservationDetailsForm.value).subscribe({
        complete: () => {
          console.log('reservationDetails successfully created!'),
          this.vauesss="operation realisé avec successs"
          //  this.ngZone.run(() => this.router.navigateByUrl('/agencelistreservationdetail'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
