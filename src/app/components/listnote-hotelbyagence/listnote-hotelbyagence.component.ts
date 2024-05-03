

import { Component, OnInit } from '@angular/core';
import { AdminapinoteHotelService } from './../../service/adminapinote-hotel.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-listnote-hotelbyagence',
  templateUrl: './listnote-hotelbyagence.component.html',
  styleUrls: ['./listnote-hotelbyagence.component.css']
})
export class ListnoteHotelbyagenceComponent {



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
    this.readnoteHotel();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readnoteHotel();
  }
////////////////////////////////////////////////////////////////////////

  noteHotel:any = [];
  constructor(private apiService: AdminapinoteHotelService,private authService: AuthService) { 
    this.readnoteHotel();
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
  readnoteHotel(){
    this.apiService.getnoteHotels().subscribe((data) => {
     this.noteHotel = data;
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

  removenoteHotel(noteHotel, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletenoteHotel(noteHotel._id).subscribe((data) => {
          this.noteHotel.splice(index, 1);
        }
      )    
    }
  }
}