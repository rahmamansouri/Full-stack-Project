
import { NoteAgence } from './../../model/note-agence';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapinoteAgenceService } from './../../service/adminapinote-agence.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-detailnote-agencebyadmin',
  templateUrl: './detailnote-agencebyadmin.component.html',
  styleUrls: ['./detailnote-agencebyadmin.component.css']
})
export class DetailnoteAgencebyadminComponent {
  //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

  submitted = false;
  editForm: FormGroup;
  noteAgencesData: NoteAgence[];
  noteAgencesProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapinoteAgenceService,
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

    
    this.updatenoteAgences();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getnoteAgences(id);
    this.editForm = this.fb.group({
      agence_id: ['', [Validators.required]],
      note: ['', [Validators.required]],
      datenote: ['', [Validators.required]],
      commentaire: ['', [Validators.required]],
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
  getnoteAgences(id) {
    this.apiService.getnoteAgence(id).subscribe((data) => {
      this.editForm.setValue({
        agence_id: data['agence_id'],
        note: data['note'],
        datenote: data['datenote'],
        commentaire: data['commentaire'],
      });
    });
  }
  updatenoteAgences() {
    this.editForm = this.fb.group({
      agence_id: ['', [Validators.required]],
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
        this.apiService.updatenoteAgence(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/noteAgencess-list');
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