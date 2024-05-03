
import { Hotels } from './../../model/hotels';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapihotelsService } from './../../service/adminapihotels.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminapicriteresService } from './../../service/adminapicriteres.service';


import { AdminapihotelPhotosService } from './../../service/adminapihotel-photos.service';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-detailhotelsbyadmin',
  templateUrl: './detailhotelsbyadmin.component.html',
  styleUrls: ['./detailhotelsbyadmin.component.css']
})
export class DetailhotelsbyadminComponent {

  //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------



  submitted = false;
  editForm: FormGroup;
  editFormssss: FormGroup;
  editFormimages: FormGroup;
  hotelsData: Hotels[];
  hotelsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapihotelsService,
    private apiService1: AdminapicriteresService,
    private apiService2: AdminapihotelPhotosService,
    private router: Router,private authService: AuthService
  ) {}

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

    this.getcriteres(id);
    this.editFormssss = this.fb.group({

      hotel_id: ['', [Validators.required]],
      critere: ['', [Validators.required]],
      valeur: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });


    this.gethotelPhotos(id);
    this.editFormimages = this.fb.group({
      hotel_id: ['', [Validators.required]],
      type: ['', [Validators.required]],
      image: ['', [Validators.required]],

    });






  }



  gethotelPhotos(id) {
    this.apiService2.gethotelPhotos(id).subscribe((data) => {
      this.editForm.setValue({
        hotel_id: data['hotel_id'],
        type: data['type'],
        image: data['image'],
      });
    });
  }


  getcriteres(id) {
    this.apiService1.getcriteresssss(id).subscribe((data) => {
      this.editForm.setValue({
        hotel_id: data['hotel_id'],
        critere: data['critere'],
        valeur: data['valeur'],
        description: data['description'],
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