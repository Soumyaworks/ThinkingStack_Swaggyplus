import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterChangeComponent } from './footer-change.component';

describe('FooterChangeComponent', () => {
  let component: FooterChangeComponent;
  let fixture: ComponentFixture<FooterChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
