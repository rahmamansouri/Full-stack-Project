
import { Users } from './../../model/users';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapiusersService } from './../../service/adminapiusers.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-editusersbyadmin',
  templateUrl: './editusersbyadmin.component.html',
  styleUrls: ['./editusersbyadmin.component.css']
})
export class EditusersbyadminComponent {

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
  usersData: Users[];
  usersProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    vauesss =  " Modifier vos données";
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapiusersService,
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
    this.updateusers();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getusers(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
     password: ['', [Validators.required]],
     role: ['', [Validators.required]],
     profileAnciennete: ['', [Validators.required]],
     profileGamme: ['', [Validators.required]],
     profileFrequence: ['', [Validators.required]],
     profileFamille: ['', [Validators.required]],
     profilePeriode: ['', [Validators.required]],
     profileFidelite: ['', [Validators.required]],
     tel: ['', [Validators.required]],
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
  getusers(id) {
    this.apiService.getusers(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        password: data['password'],
        role: data['role'],
        profileAnciennete: data['profileAnciennete'],
        profileGamme: data['profileGamme'],
        profileFrequence: data['profileFrequence'],
        profileFamille: data['profileFamille'],
        profilePeriode: data['profilePeriode'],
        profileFidelite: data['profileFidelite'],
        tel: data['tel'],

      });
    });
  }
  updateusers() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
     password: ['', [Validators.required]],
     role: ['', [Validators.required]],
     profileAnciennete: ['', [Validators.required]],
     profileGamme: ['', [Validators.required]],
     profileFrequence: ['', [Validators.required]],
     profileFamille: ['', [Validators.required]],
     profilePeriode: ['', [Validators.required]],
     profileFidelite: ['', [Validators.required]],
     tel: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateusers(id, this.editForm.value).subscribe({
          complete: () => {
            this.vauesss="operation de mise a jour realisé avec successs"
            //this.router.navigateByUrl('/adminlistuser');
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