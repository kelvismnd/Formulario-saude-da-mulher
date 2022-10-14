import { ActivatedRoute, Route, Router } from '@angular/router';
import { PacienteService } from './../pacientes/paciente.service';
import { Paciente } from './../../interface/paciente.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

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

  editarPaciente(){
    this.pacienteService.editarPaciente(this.paciente).subscribe(()=>{
      alert("Paciente editado com sucesso !!");
      this.route.navigate(['/paciente/listarCadastros'])
    })
  }
}
