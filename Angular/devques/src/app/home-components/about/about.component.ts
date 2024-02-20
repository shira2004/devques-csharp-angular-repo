import { Component } from '@angular/core';
import { LeftSectionComponent } from '../left-section/left-section.component';
import { RightSectionComponent } from '../right-section/right-section.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LeftSectionComponent ,RightSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
