import { ComponentFixture, TestBed } from '@angular/core/testing';

import {newHomeComponent } from './new-home.component';

describe('NewHomeComponent', () => {
  let component: newHomeComponent;
  let fixture: ComponentFixture<newHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [newHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(newHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
