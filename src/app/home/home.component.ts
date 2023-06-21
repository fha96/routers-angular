import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  loadServerPage(){
    this.router.navigate(['servers']);
  }

  onLogOut(){
    this.authService.logOut();
  }

  onLogIn(){
    this.authService.logIn();
  }

}
