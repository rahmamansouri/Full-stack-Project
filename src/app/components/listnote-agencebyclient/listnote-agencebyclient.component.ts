

import { Component, OnInit } from '@angular/core';
import { AdminapinoteAgenceService } from './../../service/adminapinote-agence.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-listnote-agencebyclient',
  templateUrl: './listnote-agencebyclient.component.html',
  styleUrls: ['./listnote-agencebyclient.component.css']
})
export class ListnoteAgencebyclientComponent {
  


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
  onTableDataChange(event: any) {
    this.page = event;
    this.readnoteAgence();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readnoteAgence();
  }
////////////////////////////////////////////////////////////////////////


//---------------------------------------------------------------

  getErrors() {
    this.error = null

  }
  ngOnDestroy() {
    //this.postsSub.unsubscribe();
  }
//---------------------------------------------------------------




  noteAgence:any = [];
  constructor(private apiService: AdminapinoteAgenceService,private authService: AuthService) { 
    this.readnoteAgence();
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
  readnoteAgence(){
    this.apiService.getnoteAgences().subscribe((data) => {
     this.noteAgence = data;
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

  removenoteAgence(noteAgence, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletenoteAgence(noteAgence._id).subscribe((data) => {
          this.noteAgence.splice(index, 1);
        }
      )    
    }
  }
}