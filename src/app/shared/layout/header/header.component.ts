import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDiary(){
    this.router.navigate(['/diary']);
  }

  navigateToStallSearch(){
    this.router.navigate(['/stallsearch']);
  }

  navigateToFoodSearch(){
    this.router.navigate(['/foodsearch']);
  }

  navigateToProfile(){
    this.router.navigate(['/profile']);
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

}
