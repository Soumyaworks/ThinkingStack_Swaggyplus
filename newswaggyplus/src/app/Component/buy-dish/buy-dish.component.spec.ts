import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyDishComponent } from './buy-dish.component';

describe('BuyDishComponent', () => {
  let component: BuyDishComponent;
  let fixture: ComponentFixture<BuyDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
