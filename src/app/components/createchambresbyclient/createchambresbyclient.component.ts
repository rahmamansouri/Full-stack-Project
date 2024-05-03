

import { Router } from '@angular/router';
import { AdminapichambresService } from './../../service/adminapichambres.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-createchambresbyclient',
  templateUrl: './createchambresbyclient.component.html',
  styleUrls: ['./createchambresbyclient.component.css']
})
export class CreatechambresbyclientComponent {
  submitted = false;
  chambresForm: FormGroup;
  chambresProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

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
    private apiService: AdminapichambresService,private authService: AuthService
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
    this.chambresForm = this.fb.group({

      agence_id: ['', [Validators.required]],
      hotel_id: ['', [Validators.required]],
      NumChambre: ['', [Validators.required]],
      type: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      prixAchat: ['', [Validators.required]],
      prixVente: ['', [Validators.required]],

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
    this.chambresForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.chambresForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.chambresForm.valid) {
      return false;
    } else {
      return this.apiService.createchambres(this.chambresForm.value).subscribe({
        complete: () => {
          console.log('chambres successfully created!'),
          this.vauesss="operation realisé avec successs"
           // this.ngZone.run(() => this.router.navigateByUrl('/clientlistchambre'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}