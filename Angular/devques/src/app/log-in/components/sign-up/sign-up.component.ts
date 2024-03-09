import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';


import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserService } from '../../../services/user.service';
import { DialogComponent } from '../../../home-components/dialog/dialog.component';
import { User } from '../../user.model';
import { APP_ROUTES } from '../../../app_routes';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog'
import { handleFileSelected } from '../../../helper';




@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule , 
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  SignUpForm!: FormGroup;
  hide = true;

  constructor(private router: Router, private _userService: UserService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.SignUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/),
      ]),
    });
  }

  APP_ROUTES = APP_ROUTES
  selectedImage: File | null = null;
  base64Image: string | null = null;
  dialogData1 = {
    text1: 'Welcome!',
    text2: 'Your account has been successfully added.',
    imageSrc: '../../assets/pic/sign.gif',
    button: {
      label: 'OK',
      onClick: () => {
        this.router.navigate([APP_ROUTES.HOME]);
        console.log('OK button clicked');

      },
    },
  };

  dialogData2 = {
    text1: 'ooppss!',
    text2: 'this account is already exist.',
    imageSrc: '../../assets/pic/error.gif',
    button: {
      label: 'OK',
      onClick: () => {
        this.router.navigate(['home']);
        console.log('OK button clicked');

      },
    },
  };
  submit() {
    console.log('Form Object:', this.SignUpForm.value);
    const userToAdd: User = {
      ...this.SignUpForm.value,
      image: this.base64Image || '', 
    };

    this._userService.addUserByServer(userToAdd).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res))
        this.dialog.open(DialogComponent, {
          data: this.dialogData1,
          height: '500px',
          width: '350px',
        });
      },
      error: (err) => {
        console.log(err);
        this.dialog.open(DialogComponent, {
          data: this.dialogData2
        });
      }
    });
  }
  GoToSignIn() {
    console.log('go to sign in ');
    this.router.navigate([APP_ROUTES.SIGN_IN]);
  }

  onFileSelected(event: any): void {
    handleFileSelected(event, (base64Image) => {
      this.selectedImage = event.target.files[0];
      this.base64Image = base64Image;
     
    });
  }
}  
