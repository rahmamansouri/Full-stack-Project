
import { Hotels } from './../../model/hotels';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapihotelsService } from './../../service/adminapihotels.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-detailhotelsbyagence',
  templateUrl: './detailhotelsbyagence.component.html',
  styleUrls: ['./detailhotelsbyagence.component.css']
})
export class DetailhotelsbyagenceComponent {

    //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------



  submitted = false;
  editForm: FormGroup;
  hotelsData: Hotels[];
  hotelsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapihotelsService,
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
    this.updatehotels();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.gethotels(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
            adresse: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nbetoile: ['', [Validators.required]],
      promotion: ['', [Validators.required]],

    });
  }
  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
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




  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  gethotels(id) {
    this.apiService.gethotels(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
                adresse: data['adresse'],
        tel: data['tel'],
        email: data['email'],
        nbetoile: data['nbetoile'],
        promotion: data['promotion'],

      });
    });
  }
  updatehotels() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
            adresse: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required]],
      nbetoile: ['', [Validators.required]],
      promotion: ['', [Validators.required]],

    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatehotels(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/hotelss-list');
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