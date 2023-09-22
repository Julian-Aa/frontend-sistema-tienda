import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraRealizadaComponent } from './compra-realizada.component';

describe('CompraRealizadaComponent', () => {
  let component: CompraRealizadaComponent;
  let fixture: ComponentFixture<CompraRealizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompraRealizadaComponent]
    });
    fixture = TestBed.createComponent(CompraRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
