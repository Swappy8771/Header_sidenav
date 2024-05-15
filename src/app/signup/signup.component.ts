import { Component } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  // currentUser!: User;
  // user: User = new User();
  
  // submitForm() {
  //   console.log('Form submitted:', this.user);
  // }
  
  // shouldHideAgeForUser(user: User): boolean {
  //   return user.role === 'Admin' || user.role === 'HR';
  // }
  
  public isOpen: boolean = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }
}
