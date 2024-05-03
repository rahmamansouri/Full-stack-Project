
import { Component, OnInit } from '@angular/core';
import { AdminapihotelPhotosService } from './../../service/adminapihotel-photos.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-listhotel-photosbyclient',
  templateUrl: './listhotel-photosbyclient.component.html',
  styleUrls: ['./listhotel-photosbyclient.component.css']
})
export class ListhotelPhotosbyclientComponent {
  

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
    this.readhotelPhotos();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readhotelPhotos();
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




  hotelPhotos:any = [];
  constructor(private apiService: AdminapihotelPhotosService,private authService: AuthService) { 
    this.readhotelPhotos();
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
  readhotelPhotos(){
    this.apiService.gethotelPhotoss().subscribe((data) => {
     this.hotelPhotos = data;
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

  removehotelPhotos(hotelPhotos, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletehotelPhotos(hotelPhotos._id).subscribe((data) => {
          this.hotelPhotos.splice(index, 1);
        }
      )    
    }
  }
}