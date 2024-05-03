
import { Component, OnInit } from '@angular/core';
import { AdminapichambresService } from './../../service/adminapichambres.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-listchambresbyadmin',
  templateUrl: './listchambresbyadmin.component.html',
  styleUrls: ['./listchambresbyadmin.component.css']
})
export class ListchambresbyadminComponent {
    //---------------------------------------------------------------
  isloading = false;
  error: any
  userId: string
//---------------------------------------------------------------

  clientfinded:any = [];
  chambres:any = [];
  projetForm: FormGroup;

  /////////////////////////////////////////////////////////////////////
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

////////////////////////////////////////////////////////////////////////
  onTableDataChange(event: any) {
    this.page = event;
    this.readchambres();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.readchambres();
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




onSubmitssss() {

 
  let creatorId = []
  for (let i in this.chambres) {
    if((this.projetForm.value.NumChambre==this.chambres[i].NumChambre)||(this.projetForm.value.type==this.chambres[i].type))
    
         this.clientfinded.push(this.chambres[i])
    

    

  }
  this.chambres =this.clientfinded;




}



  

  constructor(private apiService: AdminapichambresService,private authService: AuthService) { 
    this.readchambres();
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
  readchambres(){
    this.apiService.getchambress().subscribe((data) => {
     this.chambres = data;
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

  removechambres(chambres, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletechambres(chambres._id).subscribe((data) => {
          this.chambres.splice(index, 1);
        }
      )    
    }
  }
}