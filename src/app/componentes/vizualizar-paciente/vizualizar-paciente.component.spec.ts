import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizarPacienteComponent } from './vizualizar-paciente.component';

describe('VizualizarPacienteComponent', () => {
  let component: VizualizarPacienteComponent;
  let fixture: ComponentFixture<VizualizarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizarPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VizualizarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
