import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  admin:boolean = false;

  isAdmin(){
  
    this.admin = true;

  }

  logOut(){
    this.admin = false;
  }  
  ngOnInit(): void {
  }

}
