import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule
   ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
    this.SignUpForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password :new FormControl('', [Validators.required]),
    firstName : new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required]),
    receiveUpdates : new FormControl(false)
    });
  }
  SignUpForm!: FormGroup;
 
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  
  hide = true;


   submit() {
    console.log('hi');
    console.log('Form Object:', this.SignUpForm.value);
 
  }
  signIn(){
    this.router.navigate(['/ques']);
  }
  

}
