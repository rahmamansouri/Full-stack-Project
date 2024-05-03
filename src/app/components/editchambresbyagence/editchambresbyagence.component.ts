



import { Chambres } from './../../model/chambres';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminapichambresService } from './../../service/adminapichambres.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-editchambresbyagence',
  templateUrl: './editchambresbyagence.component.html',
  styleUrls: ['./editchambresbyagence.component.css']
})
export class EditchambresbyagenceComponent {
  submitted = false;
  editForm: FormGroup;
  chambresData: Chambres[];
  chambresProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

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
    private apiService: AdminapichambresService,
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
    this.updatechambres();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getchambres(id);
    this.editForm = this.fb.group({

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
  getchambres(id) {
    this.apiService.getchambres(id).subscribe((data) => {
      this.editForm.setValue({
        agence_id: data['agence_id'],
        hotel_id: data['hotel_id'],
        NumChambre: data['NumChambre'],
        type: data['type'],
        datedebut: data['datedebut'],
        datefin: data['datefin'],
        etat: data['etat'],
        prixAchat: data['prixAchat'],
        prixVente: data['prixVente'],
      });
    });
  }
  updatechambres() {
    this.editForm = this.fb.group({

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
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatechambres(id, this.editForm.value).subscribe({
          complete: () => {
            this.vauesss="operation de mise a jour realisé avec successs"
            //this.router.navigateByUrl('/agencelistchambre');
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