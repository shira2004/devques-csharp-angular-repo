import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.css'
})
export class newHomeComponent {
  @ViewChild('carousel') carousel!: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    $(this.carousel.nativeElement).carousel({
      interval: false
    });
  }
  
}
