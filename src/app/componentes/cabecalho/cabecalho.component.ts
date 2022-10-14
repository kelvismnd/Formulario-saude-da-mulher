import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  titulo:string | null  = 'Saúde da Mulher';
  constructor(private routerParans:ActivatedRoute) { }


  ngOnInit(): void {

  }

}
