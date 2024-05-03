
import { NoteHotel } from './../../model/note-hotel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapinoteHotelService } from './../../service/adminapinote-hotel.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-detailnote-hotelbyadmin',
  templateUrl: './detailnote-hotelbyadmin.component.html',
  styleUrls: ['./detailnote-hotelbyadmin.component.css']
})
export class DetailnoteHotelbyadminComponent {
  //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

  submitted = false;
  editForm: FormGroup;
  noteHotelsData: NoteHotel[];
  noteHotelsProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapinoteHotelService,
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
    this.updatenoteHotels();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getnoteHotels(id);
    this.editForm = this.fb.group({
      hotel_id: ['', [Validators.required]],
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
  getnoteHotels(id) {
    this.apiService.getnoteHotel(id).subscribe((data) => {
      this.editForm.setValue({
        hotel_id: data['hotel_id'],
        note: data['note'],
        datenote: data['datenote'],
        commentaire: data['commentaire'],
      });
    });
  }
  updatenoteHotels() {
    this.editForm = this.fb.group({
      hotel_id: ['', [Validators.required]],
      note: ['', [Validators.required]],
      datenote: ['', [Validators.required]],
      commentaire: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatenoteHotel(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/noteHotelss-list');
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