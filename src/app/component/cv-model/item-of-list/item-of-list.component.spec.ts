import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOfListComponent } from './item-of-list.component';

describe('ItemOfListComponent', () => {
  let component: ItemOfListComponent;
  let fixture: ComponentFixture<ItemOfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOfListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
