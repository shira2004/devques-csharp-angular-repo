import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {Router} from '@angular/router';
import { APP_ROUTES } from '../../app_routes';
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
    console.log('try to navigate to add ques');
    
    this.router.navigate([APP_ROUTES.ADD_QUEST]);
  }

  about(){
    console.log('before route');
    this.router.navigate([APP_ROUTES.ABOUT]);
  }
  signIn(){
    console.log('before route');
    this.router.navigate([APP_ROUTES.SIGN_IN]);
  }
  ques(){
    this.router.navigate([APP_ROUTES.CATEGORY_SELECTIONS]);
  }
}
