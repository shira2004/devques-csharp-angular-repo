import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesListComponent } from './ques-list.component';

describe('QuesListComponent', () => {
  let component: QuesListComponent;
  let fixture: ComponentFixture<QuesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
