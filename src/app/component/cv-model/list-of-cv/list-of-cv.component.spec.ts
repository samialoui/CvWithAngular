import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCvComponent } from './list-of-cv.component';

describe('ListOfCvComponent', () => {
  let component: ListOfCvComponent;
  let fixture: ComponentFixture<ListOfCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
