import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from './../pacientes/paciente.service';
import { Paciente } from './../../interface/paciente.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vizualizar-paciente',
  templateUrl: './vizualizar-paciente.component.html',
  styleUrls: ['./vizualizar-paciente.component.scss']
})
export class VizualizarPacienteComponent implements OnInit {
  paciente:Paciente ={
    id:0,
    nome:'',
    cpf:'',
    dataNascimento:'',
    naturalidade:'',
  }

  constructor(private pacienteService:PacienteService,
    private router:ActivatedRoute,
    private route:Router
  ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.pacienteService.buscarPorId(parseInt(id!)).subscribe((paciente)=>{
      this.paciente = paciente;
    });
  }



}
