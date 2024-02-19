import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';


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
  constructor(private router: Router , private _userService: UserService ){}
  ngOnInit(): void {
    this.SignUpForm = new FormGroup({
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password :new FormControl('', [Validators.required]),
    // receiveUpdates : new FormControl(false)
    });
  }
  SignUpForm!: FormGroup;
  hide = true;


  submit() {
    console.log('Form Object:', this.SignUpForm.value);

    const userToAdd: User = this.SignUpForm.value;

    this._userService.addUserByServer(userToAdd).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
  });
  }
  signIn(){
    this.router.navigate(['/sign-in']);
  }
  

}
