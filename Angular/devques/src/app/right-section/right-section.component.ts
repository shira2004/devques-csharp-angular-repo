import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-section',
  standalone: true,
  imports: [],
  templateUrl: './right-section.component.html',
  styleUrl: './right-section.component.css'
})
export class RightSectionComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() buttonText!: string;
  @Input() imageSrc!: string;
  @Input() customStyle!: any;

  onClick(): void {
    // Implement your click logic here
  }

}
