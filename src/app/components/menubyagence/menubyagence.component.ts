


import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-menubyagence',
  templateUrl: './menubyagence.component.html',
  styleUrls: ['./menubyagence.component.css']
})
export class MenubyagenceComponent {



  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  profile: any;
  username: string
  profileisSet = false
  constructor(private authService: AuthService,
    private route: ActivatedRoute) { }



  onLogout() {
    this.authService.logout();
  }




}
