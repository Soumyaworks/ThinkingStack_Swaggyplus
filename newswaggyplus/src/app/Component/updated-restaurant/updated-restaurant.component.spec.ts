import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedRestaurantComponent } from './updated-restaurant.component';

describe('UpdatedRestaurantComponent', () => {
  let component: UpdatedRestaurantComponent;
  let fixture: ComponentFixture<UpdatedRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
