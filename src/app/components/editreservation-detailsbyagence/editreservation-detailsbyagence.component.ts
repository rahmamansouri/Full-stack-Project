

import { ReservationDetails } from './../../model/reservation-details';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapireservationDetailsService } from './../../service/adminapireservation-details.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-editreservation-detailsbyagence',
  templateUrl: './editreservation-detailsbyagence.component.html',
  styleUrls: ['./editreservation-detailsbyagence.component.css']
})
export class EditreservationDetailsbyagenceComponent {

  //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------
//---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------


  submitted = false;
  editForm: FormGroup;
  reservationDetailsData: ReservationDetails[];
  reservationDetailsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    vauesss =  " Modifier vos données";
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapireservationDetailsService,
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
    this.updatereservationDetails();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getreservationDetails(id);
    this.editForm = this.fb.group({
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
  getreservationDetails(id) {
    this.apiService.getreservationDetails(id).subscribe((data) => {
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
  updatereservationDetails() {
    this.editForm = this.fb.group({
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
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatereservationDetails(id, this.editForm.value).subscribe({
          complete: () => {
            this.vauesss="operation de mise a jour realisé avec successs"
            //this.router.navigateByUrl('/agencelistreservationdetail');
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