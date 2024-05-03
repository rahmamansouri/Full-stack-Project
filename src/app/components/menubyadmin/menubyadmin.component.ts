

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-menubyadmin',
  templateUrl: './menubyadmin.component.html',
  styleUrls: ['./menubyadmin.component.css']
})
export class MenubyadminComponent {



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
