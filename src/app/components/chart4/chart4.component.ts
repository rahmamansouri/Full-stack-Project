


//or
///   import Chart from 'chart.js';
import { AdminapinoteHotelService } from './../../service/adminapinote-hotel.service';

import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import Chart from 'chart.js/auto';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.css']
})
export class Chart4Component {

  notejob:any = [];
  datassss:any = [];


  labels:any = [];

  constructor(private apiService: AdminapinoteHotelService,private authService: AuthService) { 
    this.readnotejob();

  }

  readnotejob(){
    this.apiService.getnoteHotels().subscribe((data) => {
     this.notejob = data;

     for (let i in this.notejob) {
                this.labels.push(this.notejob[i].hotel_id)
                this.datassss.push(this.notejob[i].note)

     }

    })    
  }





  title = 'ng-chart';
  chart: any = [];
 

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

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: '# of NOTES JOBS',
            data: this.datassss,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}