


import { Component, OnInit } from '@angular/core';
import { AdminapireservationsService } from './../../service/adminapireservations.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-listreservationsbyclient',
  templateUrl: './listreservationsbyclient.component.html',
  styleUrls: ['./listreservationsbyclient.component.css']
})
export class ListreservationsbyclientComponent {

    //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

  /////////////////////////////////////////////////////////////////////
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

////////////////////////////////////////////////////////////////////////

  //---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------




  onTableDataChange(event: any) {
    this.page = event;
    this.readreservations();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readreservations();
  }
////////////////////////////////////////////////////////////////////////

  reservations:any = [];
  constructor(private apiService: AdminapireservationsService,private authService: AuthService) { 
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


    this.userId = this.authService.getUserId()
    
  }
  readreservations(){
    this.apiService.getreservationss().subscribe((data) => {
     this.reservations = data;
    })    
  }
    public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('report-demo.pdf');
    });
  }

  removereservations(reservations, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletereservations(reservations._id).subscribe((data) => {
          this.reservations.splice(index, 1);
        }
      )    
    }
  }
}