import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})

export class CrearClienteComponent implements OnInit {
   nombre!: string
   codigo!: number
   fechaNacimiento!:Date
   estadoCivil!:string
   private cliente!:Cliente


  constructor
  (private _clienteService:ClienteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['cliente']);
  }

  create() {  
    debugger;
    this.cliente = {Id:1,Codigo:this.codigo,Nombre:this.nombre,FechaNacimiento:this.fechaNacimiento,EstadoCivil:this.estadoCivil,Estado:1};    
       console.log(this.cliente)
   debugger;
    this._clienteService.create(this.cliente)
      .subscribe((res: any) => {
     
          this.router.navigate(['cliente']).then(() => {
            window.location.reload();
          });
       
      });
  
 
  }

}
