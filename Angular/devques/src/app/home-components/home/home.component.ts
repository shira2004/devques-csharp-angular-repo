import { Component } from '@angular/core';

import { LeftSectionComponent } from '../left-section/left-section.component';
import { RightSectionComponent } from '../right-section/right-section.component';
import { CarouselComponent } from '../../unuseful/carousel/carousel.component';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../app_routes';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RightSectionComponent , LeftSectionComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}

  onJoinSectionClick(){
    this.router.navigate( [APP_ROUTES.SIGN_UP]);
  }
  onStartSectionClick(){
    this.router.navigate([APP_ROUTES.CATEGORY_SELECTIONS]);
  }
  onAboutSectionClick(){
    this.router.navigate([APP_ROUTES.ABOUT]);
   
  }
  onAddQuesSectionClick(){
    this.router.navigate( [APP_ROUTES.SIGN_UP]);
  }
}
