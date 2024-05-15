import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendResetLink() {
    const emailControl = this.emailForm.get('email');
    if (emailControl && emailControl.value === '') {
      // Display error message for empty email field
      alert('Please enter your email address.');
    } else {
      // Proceed with sending reset link
      this.submitForm();
    }
  }

  submitForm() {
    // Logic to submit the form goes here
    console.log('Form submitted!', this.emailForm.value);
  }
}
