import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import {MatCardModule} from '@angular/material/card';
import { FormularioPacienteComponent } from './componentes/formulario-paciente/formulario-paciente.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { ListarCadastrosPacientesComponent } from './componentes/listar-cadastros-pacientes/listar-cadastros-pacientes.component';
import {HttpClientModule} from '@angular/common/http';
import { ExcluirPacienteComponent } from './componentes/excluir-paciente/excluir-paciente.component';
import { EditarPacienteComponent } from './componentes/editar-paciente/editar-paciente.component';
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FormularioPacienteComponent,
    ListarCadastrosPacientesComponent,
    ExcluirPacienteComponent,
    EditarPacienteComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
