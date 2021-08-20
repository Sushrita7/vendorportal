import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceeComponent } from './invoicee.component';

describe('InvoiceeComponent', () => {
  let component: InvoiceeComponent;
  let fixture: ComponentFixture<InvoiceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
