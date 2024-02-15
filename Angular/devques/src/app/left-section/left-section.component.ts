import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-section',
  standalone: true,
  imports: [],
  templateUrl: './left-section.component.html',
  styleUrl: './left-section.component.css'
})
export class LeftSectionComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonText!: string;
  @Input() imageSrc!: string;
  @Input() customStyle!: any;

  onClick(): void {
    // Implement your click logic here
  }

}
