import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySelctionComponent } from './category-selction.component';

describe('CategorySelctionComponent', () => {
  let component: CategorySelctionComponent;
  let fixture: ComponentFixture<CategorySelctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySelctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorySelctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
