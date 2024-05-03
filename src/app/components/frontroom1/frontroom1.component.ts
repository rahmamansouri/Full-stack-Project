import { Component } from '@angular/core';


import { AdminapihotelsService } from './../../service/adminapihotels.service';
import { AdminapicriteresService } from './../../service/adminapicriteres.service';
import { AdminapichambresService } from './../../service/adminapichambres.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-frontroom1',
  templateUrl: './frontroom1.component.html',
  styleUrls: ['./frontroom1.component.css']
})
export class Frontroom1Component {
  hotels:any = [];
  criteres:any = [];
  chambres:any = [];
  constructor(private apiService: AdminapihotelsService
    
    ,private apiService1: AdminapicriteresService
    ,private apiService2: AdminapichambresService
    
    
    
    ,public route: ActivatedRoute,
    public router: Router) { 
    this.readhotels();
    this.readcrietres();
    this.readchambres();
  }
  //---------------------oussema

  readhotels(){
    this.apiService.gethotelss().subscribe((data) => {
     this.hotels = data;
    })    
  }


  readcrietres(){
    this.apiService1.getcriteress().subscribe((data) => {
     this.criteres = data;
    })    
  }
  
  readchambres(){
    this.apiService2.getchambress().subscribe((data) => {
     this.chambres = data;
    })    
  }
}
