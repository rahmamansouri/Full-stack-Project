



import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-menubyclient',
  templateUrl: './menubyclient.component.html',
  styleUrls: ['./menubyclient.component.css']
})
export class MenubyclientComponent {



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
