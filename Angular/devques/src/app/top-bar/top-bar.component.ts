import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {Router} from '@angular/router';
@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatButtonToggleModule ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  constructor(private router: Router){}

  myAccount(){
    console.log('before route');  
    this.router.navigate(['/my-account']);
  }

  addQues(){
    console.log('before route'); 
    this.router.navigate(['/add-ques']);
  }

  about(){
    console.log('before route');
    this.router.navigate(['/About']);
  }
  signIn(){
    console.log('before route');
    this.router.navigate(['/sign-in']);
  }
}
