import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
   ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private router: Router){}
  ngOnInit(): void {
    this.SignInForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password :new FormControl('', [Validators.required]),
    });
  }
  SignInForm!: FormGroup;
  hide = true;


  submit() {
   console.log('Form Object:', this.SignInForm.value);

 }
 GoToSignUp(){
  console.log('nav to sign up ');
  
   this.router.navigate(['/sign-up']);
 }

}
