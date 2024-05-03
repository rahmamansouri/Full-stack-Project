
import { HotelPhotos } from './../../model/hotel-photos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapihotelPhotosService } from './../../service/adminapihotel-photos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-detailhotel-photosbyadmin',
  templateUrl: './detailhotel-photosbyadmin.component.html',
  styleUrls: ['./detailhotel-photosbyadmin.component.css']
})
export class DetailhotelPhotosbyadminComponent {

  //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------



  submitted = false;
  editForm: FormGroup;
  hotelPhotosData: HotelPhotos[];
  hotelPhotosProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapihotelPhotosService,
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
    this.updatehotelPhotos();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.gethotelPhotos(id);
    this.editForm = this.fb.group({
      hotel_id: ['', [Validators.required]],
      type: ['', [Validators.required]],
      image: ['', [Validators.required]],
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
  gethotelPhotos(id) {
    this.apiService.gethotelPhotos(id).subscribe((data) => {
      this.editForm.setValue({
        hotel_id: data['hotel_id'],
        type: data['type'],
        image: data['image'],
      });
    });
  }
  updatehotelPhotos() {
    this.editForm = this.fb.group({
      hotel_id: ['', [Validators.required]],
      type: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatehotelPhotos(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/hotelPhotoss-list');
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