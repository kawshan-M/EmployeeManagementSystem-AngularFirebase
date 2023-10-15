import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shered/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Output() loggedInStatus = new EventEmitter<boolean>();

  email: string = '';
  password: string = '';
  isLoggedIn = false;
  uid: string | null = null;


  constructor(private auth: AngularFireAuth, private router: Router,public authService: AuthService) { 
    
  }

  async login() { 
    try {
      const result = await this.auth.signInWithEmailAndPassword(this.email, this.password);
      if (result.user) {
        // Authentication was successful, you can handle the login logic here
        this.isLoggedIn = true;
        this.uid = result.user.uid;
        this.loggedInStatus.emit(true); // Emit an event to notify the parent component of login status
        // Redirect to the desired page
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.error('Login Error:', error);
      // Handle login error, e.g., show an error message to the user
    }
  }

  ngOnInit() {
  }

}
