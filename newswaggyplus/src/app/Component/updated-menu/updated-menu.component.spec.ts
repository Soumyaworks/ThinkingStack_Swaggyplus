import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedMenuComponent } from './updated-menu.component';

describe('UpdatedMenuComponent', () => {
  let component: UpdatedMenuComponent;
  let fixture: ComponentFixture<UpdatedMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
