import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaElementosComponent } from './lista-elementos.component';

describe('ListaElementosComponent', () => {
  let component: ListaElementosComponent;
  let fixture: ComponentFixture<ListaElementosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaElementosComponent]
    });
    fixture = TestBed.createComponent(ListaElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
