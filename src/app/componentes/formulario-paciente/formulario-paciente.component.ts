import { PacienteService } from './../pacientes/paciente.service';
import { Paciente } from './../../interface/paciente.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.scss']
})
export class FormularioPacienteComponent implements OnInit {

  paciente:Paciente ={
    id:0,
    nome:'',
    cpf:'',
    dataNascimento:'',
    naturalidade:'',
  }
  constructor(private pacienteService:PacienteService , private router:Router) {

  }

  ngOnInit(): void {
  }

  cadastrarPaciente(){
    this.pacienteService.cadastrarPaciente(this.paciente).subscribe((resposta)=>{
      alert("Paciente Cadastrado com Sucesso!!!");
      console.log('Paciente cadastrado com sucesso');
      this.router.navigate(['paciente/listarCadastros']);
    })
  }
}
