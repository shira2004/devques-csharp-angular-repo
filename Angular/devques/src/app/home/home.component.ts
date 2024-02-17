import { Component } from '@angular/core';

import { LeftSectionComponent } from '../left-section/left-section.component';
import { RightSectionComponent } from '../right-section/right-section.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { Router } from '@angular/router';
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
    this.router.navigate(['sign-up']);
  }
  onStartSectionClick(){
    this.router.navigate(['ques']);
  }
  onAboutSectionClick(){
    this.router.navigate(['About']);
  }
  onAddQuesSectionClick(){
    this.router.navigate(['add-ques']);
  }
}
