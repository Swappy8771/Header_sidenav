import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      const storedRememberMe = localStorage.getItem('rememberMe');

      if (storedUsername && storedPassword && storedRememberMe === 'true') {
        this.username = atob(storedUsername);
        this.password = atob(storedPassword);
        this.rememberMe = true;
      }
    }
  }

  onSubmit(form: NgForm) {
    // Add form submission logic here, for example, you can log the form values
    console.log('Form submitted!');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

    // Here you can add additional logic to send the form data to a server or perform any other action.
    // For example, if you have an authentication service, you can call its method to handle the authentication process.
    // this.authService.login(this.username, this.password);

    // Save "Remember Me" preference to local storage
    if (this.rememberMe) {
      if (typeof localStorage !== 'undefined') {
        const encodedUsername = btoa(this.username);
        const encodedPassword = btoa(this.password);
        localStorage.setItem('username', encodedUsername);
        localStorage.setItem('password', encodedPassword);
        localStorage.setItem('rememberMe', 'true');
      }
    } else {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('rememberMe');
      }
    }
  }

  onRememberMeChange() {
    // This function is called when the "Remember Me" checkbox value changes
    // You can add any additional logic here if needed
  }
}
