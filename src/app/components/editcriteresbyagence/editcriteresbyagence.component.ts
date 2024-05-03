
import { Criteres } from './../../model/criteres';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapicriteresService } from './../../service/adminapicriteres.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-editcriteresbyagence',
  templateUrl: './editcriteresbyagence.component.html',
  styleUrls: ['./editcriteresbyagence.component.css']
})
export class EditcriteresbyagenceComponent {
  submitted = false;
  editForm: FormGroup;
  criteresData: Criteres[];
  criteresProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    vauesss =  " Modifier vos données";

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




  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AdminapicriteresService,
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
    this.updatecriteres();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getcriteres(id);
    this.editForm = this.fb.group({

      hotel_id: ['', [Validators.required]],
      critere: ['', [Validators.required]],
      valeur: ['', [Validators.required]],
      description: ['', [Validators.required]],
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
  getcriteres(id) {
    this.apiService.getcriteres(id).subscribe((data) => {
      this.editForm.setValue({
        hotel_id: data['hotel_id'],
        critere: data['critere'],
        valeur: data['valeur'],
        description: data['description'],
      });
    });
  }
  updatecriteres() {
    this.editForm = this.fb.group({

      hotel_id: ['', [Validators.required]],
      critere: ['', [Validators.required]],
      valeur: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatecriteres(id, this.editForm.value).subscribe({
          complete: () => {
            this.vauesss="operation de mise a jour realisé avec successs"
            //this.router.navigateByUrl('/agencelistcritere');
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