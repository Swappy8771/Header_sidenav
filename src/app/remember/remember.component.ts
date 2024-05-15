import { Component } from '@angular/core';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrl: './remember.component.css'
})
export class RememberComponent {

  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    // Implement authentication logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
  }

}
