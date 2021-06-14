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
  nombre: string='';
  codigo!: number
  fechaNacimiento!:Date
  estadoCivil!:string
  cliente!:Cliente

  constructor
  (private _clienteService:ClienteService,
    private router: Router
   ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['cliente']);
  }

  create() {  
   
       
   
    this._clienteService.create(new Cliente(1,this.codigo,this.nombre,this.fechaNacimiento,this.estadoCivil,1))
      .subscribe((res: any) => {
        if(res && res.message.includes("Added")){
          this.router.navigate(['cliente']).then(() => {
            window.location.reload();
          });
        }else{
         console.log("Error")
        }
      });
  
 
  }

}
