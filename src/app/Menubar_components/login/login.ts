import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username: string = '';
  pass: string = '';
  showSuccessMessage: boolean = false; 

  private validCredentials = [
    { username: 'jayyantt', password: '1234567' },
    { username: 'admin', password: 'adminpassword' },
    { username: 'guest', password: 'guestpass' }
  ];

  constructor(private router: Router) { }

  getuserData(form: any): void {
    const enteredUsername = form.controls['Username'].value;
    const enteredPassword = form.controls['pass'].value;

    const isAuthenticated = this.validCredentials.some(user =>
      user.username === enteredUsername && user.password === enteredPassword
    );

    if (isAuthenticated) {
      console.log('Login successful! Showing message and redirecting...');
      this.showSuccessMessage = true; 

      
      setTimeout(() => {
        this.router.navigate(['/']); 
        this.showSuccessMessage = false; 
      }, 2000);
    } else {
      console.log('Login failed: Invalid username or password.');
      alert('Invalid username or password!');
      this.showSuccessMessage = false; 
    }

    form.resetForm();
  }
}
