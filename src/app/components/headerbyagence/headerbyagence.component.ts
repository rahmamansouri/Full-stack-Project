

import { Component, OnInit } from '@angular/core';
import { AdminapihotelsService } from './../../service/adminapihotels.service';


import { AdminapiusersService } from './../../service/adminapiusers.service';
import { AdminapireservationsService } from './../../service/adminapireservations.service';

import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-headerbyagence',
  templateUrl: './headerbyagence.component.html',
  styleUrls: ['./headerbyagence.component.css']
})
export class HeaderbyagenceComponent {

  
  hotels:any = [];
  users:any = [];
  agences:any = [];
  reservations:any = [];
  constructor(private apiService: AdminapihotelsService
    ,private apiService1: AdminapiusersService
    ,private apiService2: AdminapireservationsService,private authService: AuthService
    
    
    ) { 
    this.readhotels();
    this.readusers();
    this.readagences();
    this.readreservations();
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
}
  readhotels(){
    this.apiService.gethotelss().subscribe((data) => {
     this.hotels = data;
    })    
  }
  readusers(){
    this.apiService1.getuserss().subscribe((data) => {
     this.users = data;
    })    
  }
  readagences(){
    this.apiService1.getuserss().subscribe((data) => {
      this.agences = data;
    })    
  }
  readreservations(){
    this.apiService2.getreservationss().subscribe((data) => {
     this.reservations = data;
    })    
  }
  removehotels(hotels, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletehotels(hotels._id).subscribe((data) => {
          this.hotels.splice(index, 1);
        }
      )    
    }
  }
}