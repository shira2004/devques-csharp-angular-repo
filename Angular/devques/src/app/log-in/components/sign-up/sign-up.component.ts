import { Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';


import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialog} from '@angular/material/dialog'


import { UserService } from '../../../user.service';
import { DialogComponent } from '../../../home-components/dialog/dialog.component';
import { User } from '../../user.model';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,  
   ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router , private _userService: UserService , public dialog:MatDialog  ){}
  ngOnInit(): void {
    this.SignUpForm = new FormGroup({
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password :new FormControl('', [Validators.required]),
    // receiveUpdates : new FormControl(false)
    });
  }
   dialogData = {
    text1: 'Welcome!',
    text2: 'Your account has been successfully added.',
    imageSrc: '../../assets/pic/sign.gif',
    button: {
      label: 'OK',
      onClick: () => {
        this.router.navigate(['home']);
        console.log('OK button clicked');
       
      },
    },
  };
  SignUpForm!: FormGroup;
  hide = true;
  submit() {
    console.log('Form Object:', this.SignUpForm.value);
    const userToAdd: User = this.SignUpForm.value;
  
    this._userService.addUserByServer(userToAdd).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res))
        this.dialog.open(DialogComponent, {
          data: this.dialogData
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}  
