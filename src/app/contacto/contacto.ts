import { Component } from '@angular/core';
import { Whatsapp } from '../services/whatsapp';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  constructor(private _whatsapp: Whatsapp) { }

  hacerPedido() {
    this._whatsapp.enviarWhatsApp();
  }
}
