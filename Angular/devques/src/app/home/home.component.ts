import { Component } from '@angular/core';

import { LeftSectionComponent } from '../left-section/left-section.component';
import { RightSectionComponent } from '../right-section/right-section.component';
import { CarouselComponent } from '../carousel/carousel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RightSectionComponent , LeftSectionComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
