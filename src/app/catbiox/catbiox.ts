import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Whatsapp } from '../services/whatsapp';

@Component({
  selector: 'app-catbiox',
  imports: [],
  templateUrl: './catbiox.html',
  styleUrl: './catbiox.css'
})
export class Catbiox {

  constructor(private _route:Router, private _whatsapp: Whatsapp){}

  redireccionar(){
    this._route.navigate(['caracteristicas']);
  }

  hacerPedido(){
    this._whatsapp.enviarWhatsApp();
  }

}
