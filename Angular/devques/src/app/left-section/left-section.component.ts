import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() sectionClicked = new EventEmitter<void>();

  // onButtonClick() {
  //   // Emit the click event to the parent component
  //   this.sectionClicked.emit();
  // }

  onClick(): void {
    this.sectionClicked.emit();
  }


}
