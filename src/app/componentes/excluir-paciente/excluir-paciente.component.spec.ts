import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPacienteComponent } from './excluir-paciente.component';

describe('ExcluirPacienteComponent', () => {
  let component: ExcluirPacienteComponent;
  let fixture: ComponentFixture<ExcluirPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
