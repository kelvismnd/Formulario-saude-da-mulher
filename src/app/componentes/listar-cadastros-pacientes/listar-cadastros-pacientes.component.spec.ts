import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCadastrosPacientesComponent } from './listar-cadastros-pacientes.component';

describe('ListarCadastrosPacientesComponent', () => {
  let component: ListarCadastrosPacientesComponent;
  let fixture: ComponentFixture<ListarCadastrosPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCadastrosPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCadastrosPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
