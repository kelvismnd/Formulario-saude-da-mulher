import { Router, ActivatedRoute } from '@angular/router';
import { PacienteService } from './../pacientes/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interface/paciente.interface';

@Component({
  selector: 'app-excluir-paciente',
  templateUrl: './excluir-paciente.component.html',
  styleUrls: ['./excluir-paciente.component.scss']
})
export class ExcluirPacienteComponent implements OnInit {

  paciente:Paciente = {
    id:0,
    cpf:'',
    naturalidade:'',
    nome:'',
    dataNascimento:'',
    conjugue:'',
    dataCadastro:'',
    estadoCivil:'',
    nomeMae:'',
    profissao:'',
    nomePai:'',
    telefone:''
  }
  constructor(
    private pacienteService:PacienteService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pacienteService.buscarPorId(parseInt(id!)).subscribe((paciente)=>{
      this.paciente = paciente
    })
  }

  excluirPaciente(){
    if(this.paciente.id){

      this.pacienteService.excluirPaciente(this.paciente.id).subscribe((resposta)=>{
        this.router.navigate(['/paciente/listarCadastros'])
      })

    }
  }

  cancelar(){
    this.router.navigate(['/paciente/listarCadastros'])
  }
}
