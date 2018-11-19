import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  PASSWORD_PATTERN = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/;
  loginForm :FormGroup;


  constructor(private fb: FormBuilder, 
    public afAuth: AngularFireAuth,
    private authService: AuthService) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.PASSWORD_PATTERN)]],
    })

  }

  loginFacebook(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  loginWithEmail(){
    const formValue = this.loginForm.value;
    this.authService.loginWithEmail(formValue.email, formValue.password)
      .subscribe(
        (result) => {
          console.log(result);
          this.authService.setFirebaseTokenToLocalstorage();
          setTimeout(function() {
            //this.spinnerService.hide();
            //this.router.navigate(['']);
            console.log("delay ...");
          }.bind(this), 4500);
        }
      )
  }

  logout(){
    this.afAuth.auth.signOut().then(result=>this.authService.destroyToken());
  }

  ngOnInit() {
  }

}
