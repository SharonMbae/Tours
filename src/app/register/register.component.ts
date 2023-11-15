import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Auth } from '../interfaces/auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
emailModel: any;
passwordModel: any;
fullNameModel: any;
confirmPasswordModel: any;
  registerForm!: FormGroup;
  

onSubmit() {
console.log(this.registerForm.value);
}

ngOnInit(){

  this.registerForm= this.fb.group({
    fullName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)]],
    email:['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
    
  })
}

  

  constructor(private fb:FormBuilder, private authservice:AuthService, private router: Router){}

  get fullName(){
    return this.registerForm.controls['fullName'];
  }

  get email(){
    return this.registerForm.controls['email'];
  }
  get password(){
    return this.registerForm.controls['password'];

  }

  get confirmPassword(){
      return this.registerForm.controls['confirmPassword'];
    }

    submitDetails() {
      this.router.navigate(['/login'])
    }
    
      
      }




function confirmPassword() {
  throw new Error('Function not implemented.');
}

function showSuccess() {
  throw new Error('Function not implemented.');
}

