

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-loginbyadmin',
  templateUrl: './loginbyadmin.component.html',
  styleUrls: ['./loginbyadmin.component.css']
})
export class LoginbyadminComponent {
 

  private name : string;
  private  role: string;
  private profileAnciennete: string;
  private profileGamme: string;
  private profileFrequence: string;
  private profileFamille: string;
  private profilePeriode: string;
  private profileFidelite: string ; 


  isLoginMode = true;
  isLoading = false;
  error: any = null;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.error = null
    this.authService.err.subscribe(err => {
      this.error = err
      this.isLoading = false
    })
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode) {
      this.authService.signIn(
        this.name ,
         email ,
         password ,
         this.role ,
         this.profileAnciennete ,
         this.profileGamme ,
         this.profileFrequence ,
         this.profileFamille ,
         this.profilePeriode ,
         this.profileFidelite   
        
      )

      form.reset()
    }
    else {
      this.authService.createUser(

        this.name ,
        email ,
         password ,
         this.role ,
         this.profileAnciennete ,
         this.profileGamme ,
         this.profileFrequence ,
         this.profileFamille ,
         this.profilePeriode ,
         this.profileFidelite   


      )

      form.reset()
    }
  }

}
