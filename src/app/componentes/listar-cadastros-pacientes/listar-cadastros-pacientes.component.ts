import { PacienteService } from './../pacientes/paciente.service';
import { Paciente } from './../../interface/paciente.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cadastros-pacientes',
  templateUrl: './listar-cadastros-pacientes.component.html',
  styleUrls: ['./listar-cadastros-pacientes.component.scss'],
})
export class ListarCadastrosPacientesComponent implements OnInit {
  listaCadastros: Paciente[] = [];
  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.pacienteService.listarPacientes().subscribe((resposta) => {
      this.listaCadastros = resposta;
      console.log(resposta);
    });
  }
}
