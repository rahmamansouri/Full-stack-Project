
import { Reservations } from './../../model/reservations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapireservationsService } from './../../service/adminapireservations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { AdminapireservationDetailsService } from './../../service/adminapireservation-details.service';


import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-detailreservationsbyadmin',
  templateUrl: './detailreservationsbyadmin.component.html',
  styleUrls: ['./detailreservationsbyadmin.component.css']
})
export class DetailreservationsbyadminComponent {
  //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

  submitted = false;
  editForm: FormGroup;
  editForms: FormGroup;
  reservationsData: Reservations[];
  reservationsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapireservationsService,
    private apiService1: AdminapireservationDetailsService,
    private router: Router,private authService: AuthService
  ) {}
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

    
    this.updatereservations();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getreservations(id);
    this.editForm = this.fb.group({
      agence_id: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
      hotel_id: ['', [Validators.required]],
      date: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      paiement: ['', [Validators.required]],
      remarque: ['', [Validators.required]],
    });


    this.getreservationDetails(id);
    this.editForms = this.fb.group({
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


//---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------


  getreservationDetails(id) {
    this.apiService1.getreservationDetailsssss(id).subscribe((data) => {
      this.editForm.setValue({
        reservation_id: data['reservation_id'],
        chambre_id: data['chambre_id'],
        NbrAdulte: data['NbrAdulte'],
        NbrEnfant: data['NbrEnfant'],
        NbrBebe: data['NbrBebe'],
        debut: data['debut'],
        fin: data['fin'],
        demandeSpeciale: data['demandeSpeciale'],
        etat: data['etat'],
        remarque: data['remarque'],
        nbjours: data['nbjours'],
      });
    });
  }
  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getreservations(id) {
    this.apiService.getreservations(id).subscribe((data) => {
      this.editForm.setValue({
        agence_id: data['agence_id'],
        user_id: data['user_id'],
        hotel_id: data['hotel_id'],
        date: data['date'],
        etat: data['etat'],
        paiement: data['paiement'],
        remarque: data['remarque'],
      });
    });
  }
  updatereservations() {
    this.editForm = this.fb.group({
      agence_id: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
      hotel_id: ['', [Validators.required]],
      date: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      paiement: ['', [Validators.required]],
      remarque: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatereservations(id, this.editForm.value).subscribe({
          complete: () => {
            window.alert('opération établie successfully');
            this.router.navigateByUrl('/reservationss-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}