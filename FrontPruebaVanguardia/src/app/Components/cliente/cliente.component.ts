import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  displayedColumns: string[] = ['id', 'codigo','nombre','fechaNacimiento','estadoCivil','action'];

  constructor(private _clienteService:ClienteService,private router: Router) {}

  ngOnInit(): void {
    this._clienteService.getData().subscribe((data:any[])=>{
      this.clientes=data;
      console.log(this.clientes);
    })
  }

  create(){
    this.router.navigate(['crearcliente']);
  }



}
