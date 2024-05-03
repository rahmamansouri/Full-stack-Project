




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
  selector: 'app-createreservation-detailsbyclient',
  templateUrl: './createreservation-detailsbyclient.component.html',
  styleUrls: ['./createreservation-detailsbyclient.component.css']
})
export class CreatereservationDetailsbyclientComponent {
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
    this.reservationDetailsForm = this.fb.group({

      reservation_id: ['', [Validators.required]],
      chambre_id: ['', [Validators.required]],
      NbrAdulte: ['', [Validators.required]],
      NbrEnfant: ['', [Validators.required]],
      NbrBebe: ['', [Validators.required]],
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
      return this.apiService.createreservationDetails(this.reservationDetailsForm.value).subscribe({
        complete: () => {
          console.log('reservationDetails successfully created!'),
          this.vauesss="operation realisé avec successs"
          //  this.ngZone.run(() => this.router.navigateByUrl('/clientlistreservationdetail'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
