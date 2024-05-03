
import { Reservations } from './../../model/reservations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapireservationsService } from './../../service/adminapireservations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-editreservationsbyagence',
  templateUrl: './editreservationsbyagence.component.html',
  styleUrls: ['./editreservationsbyagence.component.css']
})
export class EditreservationsbyagenceComponent {

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
  reservationsData: Reservations[];
  reservationsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    vauesss =  " Modifier vos données";
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapireservationsService,
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
      hotel_id: ['', [Validators.required]],
      date: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      paiement: ['', [Validators.required]],
      remarque: ['', [Validators.required]],
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
            this.vauesss="operation de mise a jour realisé avec successs"
            //this.router.navigateByUrl('/agencelistreservation');
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