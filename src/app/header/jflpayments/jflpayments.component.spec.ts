import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JflpaymentsComponent } from './jflpayments.component';

describe('JflpaymentsComponent', () => {
  let component: JflpaymentsComponent;
  let fixture: ComponentFixture<JflpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JflpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JflpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
