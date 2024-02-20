import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselItemComponent ,CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  activeIndex = 0;
  userClicked = false;
  items = [
    {
      title: 'code lover',
      description:
        'Welcome to the Love It arena – where code enthusiasts come together for an inspiring play. Each contribution is a move toward refining code, inspecting details, and creating a harmonious symphony of collaboration.',
      icon: "../../assets/pic/Collective.svg" 
    },
    
  ];

  public carouselSubscription!: Subscription;

  ngOnInit() {
    this.carouselSubscription = interval(4000).subscribe(() => {
      this.setUserClicked(false);
      this.updateIndex(this.activeIndex + 1);
    });
  }

  ngOnDestroy() {
    if (this.carouselSubscription) {
      this.carouselSubscription.unsubscribe();
    }
  }

  updateIndex(newIndex: number) {
    if (!this.userClicked) {
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= this.items.length) {
        newIndex = 0;
      }
      this.activeIndex = newIndex;
    }
  }

  handlePrev() {
    this.setUserClicked(true);
    this.updateIndex(this.activeIndex - 1);
  }

  handleNext() {
    this.setUserClicked(true);
    this.updateIndex(this.activeIndex + 1);
  }

  handleIndicatorClick(index: number) {
    this.setUserClicked(true);
    this.updateIndex(index);
  }

  setUserClicked(value: boolean) {
    this.userClicked = value;
  }
}
