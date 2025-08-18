import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router'; 
import { Authentication } from '../services/authentication'; 
import { RouterModule } from '@angular/router';

@Component({ 
  selector: 'app-navbar', 
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './navbar.component.html', 
  styleUrl: './navbar.component.css', 
}) 
 
 
export class NavbarComponent implements OnInit { 
 
  constructor( 
    private authentication: Authentication 
  ) { } 
 
  ngOnInit() { } 
   
  public isLoggedIn(): boolean { 
    return this.authentication.isLoggedIn(); 
  } 
 
  public onLogout(): void { 
    return this.authentication.logout(); 
  } 
 }