import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfCvComponent } from './details-of-cv.component';

describe('DetailsOfCvComponent', () => {
  let component: DetailsOfCvComponent;
  let fixture: ComponentFixture<DetailsOfCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
