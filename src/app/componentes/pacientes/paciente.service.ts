import { Paciente } from './../../interface/paciente.interface';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly API  = 'http://localhost:3000/pacientes'
  constructor(private httpCliente:HttpClient) {

  }


  listarPacientes():Observable<Paciente[]>{
    return this.httpCliente.get<Paciente[]>(this.API);
  }

  cadastrarPaciente(paciente:Paciente):Observable<Paciente>{
    return this.httpCliente.post<Paciente>(`${this.API}/`,paciente)
  }

  excluirPaciente(id:number):Observable<Paciente>{
    const url = `${this.API}/${id}`;
    return this.httpCliente.delete<Paciente>(url);
  }

  editarPaciente(paciente:Paciente):Observable<Paciente>{
    const url = `${this.API}/${paciente.id}`
    return this.httpCliente.put<Paciente>(url,paciente);
  }

  buscarPorId(id:number):Observable<Paciente>{
    const url = `${this.API}/${id}`;
    return this.httpCliente.get<Paciente>(url);
  }


}
