import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-profile-app';

  constructor(private router: Router){}

  logOut(){
    sessionStorage.clear()
    this.router.navigate(["login"])

  }
}
