import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
emailModel: any;
passwordModel: any;
onSubmit() {
if (this.loginForm.valid){

  const email= this.emailModel;
const password= this.passwordModel;
}


}

  loginForm= this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl ('', Validators.required)
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}


  get email(){
    return this.loginForm.controls['email'];
  }
  get password(){
    return this.loginForm.controls['password'];

}


loginUser(){
  // const {email, password}= this.loginForm.value;
  // this.authService.getUserByEmail(email as string).subscribe(
  //   response => {
  //     if (response.length > 0 && response.password=== password){
  //       sessionStorage.setItem('email', email as string);
        this.router.navigate(['/home']);

          }
    }
 