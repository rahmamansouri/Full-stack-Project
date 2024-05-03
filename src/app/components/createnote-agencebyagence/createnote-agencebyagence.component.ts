


import { Router } from '@angular/router';
import { AdminapinoteAgenceService } from './../../service/adminapinote-agence.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-createnote-agencebyagence',
  templateUrl: './createnote-agencebyagence.component.html',
  styleUrls: ['./createnote-agencebyagence.component.css']
})
export class CreatenoteAgencebyagenceComponent {
  submitted = false;
  noteAgencesForm: FormGroup;
  noteAgencesProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];


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
    private apiService: AdminapinoteAgenceService,private authService: AuthService
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
    this.noteAgencesForm = this.fb.group({

      agence_id: ['', [Validators.required]],
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
    this.noteAgencesForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.noteAgencesForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.noteAgencesForm.valid) {
      return false;
    } else {
      return this.apiService.createnoteAgence(this.noteAgencesForm.value).subscribe({
        complete: () => {
          console.log('noteAgences successfully created!'),
          this.vauesss="operation realisé avec successs"
           // this.ngZone.run(() => this.router.navigateByUrl('/agencelistnoteagence'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}