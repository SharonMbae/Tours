import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bookingForm!: FormGroup
  @ViewChild('placesToVisit') placesToVisit!: ElementRef;
  @ViewChild('recommendedPlaces') recommendedPlaces!: ElementRef;


  constructor(private fb: FormBuilder,private router: Router) {
   
    
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_no: ['', [Validators.required]],
      id_no: [[Validators.required]],
      KRA_PIN: ['', [Validators.required]],
      NHIF_NO: ['', [Validators.required]],
      NSSF_NO: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

  }




}

