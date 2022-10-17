import { VizualizarPacienteComponent } from './componentes/vizualizar-paciente/vizualizar-paciente.component';
import { EditarPacienteComponent } from './componentes/editar-paciente/editar-paciente.component';
import { ExcluirPacienteComponent } from './componentes/excluir-paciente/excluir-paciente.component';
import { FormularioPacienteComponent } from './componentes/formulario-paciente/formulario-paciente.component';
import { ListarCadastrosPacientesComponent } from './componentes/listar-cadastros-pacientes/listar-cadastros-pacientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:ListarCadastrosPacientesComponent
  },
  {
    path: 'paciente/listarCadastros',
    component:ListarCadastrosPacientesComponent
  },
  {
    path:'criarCadastro',
    component:FormularioPacienteComponent
  },
  {
    path:'paciente/excluirPaciente/:id',
    component:ExcluirPacienteComponent
  },
  {
    path:'paciente/editarPaciente/:id',
    component:EditarPacienteComponent
  },
  {
    path:'paciente/vizualizarPaciente/:id',
    component:VizualizarPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
