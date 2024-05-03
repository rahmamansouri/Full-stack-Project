
import { Component, OnInit } from '@angular/core';
import { AdminapicriteresService } from './../../service/adminapicriteres.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-listcriteresbyadmin',
  templateUrl: './listcriteresbyadmin.component.html',
  styleUrls: ['./listcriteresbyadmin.component.css']
})
export class ListcriteresbyadminComponent {
  

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
    this.readcriteres();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readcriteres();
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



  criteres:any = [];
  constructor(private apiService: AdminapicriteresService,private authService: AuthService) { 
    this.readcriteres();
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
  readcriteres(){
    this.apiService.getcriteress().subscribe((data) => {
     this.criteres = data;
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

  removecriteres(criteres, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletecriteres(criteres._id).subscribe((data) => {
          this.criteres.splice(index, 1);
        }
      )    
    }
  }
}