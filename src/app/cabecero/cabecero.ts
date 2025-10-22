import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Whatsapp } from '../services/whatsapp';

@Component({
  selector: 'app-cabecero',
  imports: [],
  templateUrl: './cabecero.html',
  styleUrl: './cabecero.css'
})
export class Cabecero {
  @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLInputElement>;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const menu = this.menuToggle?.nativeElement;

    if (menu && menu.checked && !menu.contains(targetElement)) {
      const nav = document.querySelector('nav.container');
      if (nav && !nav.contains(targetElement)) {
        menu.checked = false;
      }
    }
  }

  constructor(private _router:Router, private _whatsapp : Whatsapp){}

  hacerPedido(){
    this._whatsapp.enviarWhatsApp();
  }

  redireccionarp(){
    this._router.navigate(['/']);
  }
  redireccionarB(){
    this._router.navigate(['beneficios']);
  };
  redireccioanarC(){
    this._router.navigate(['caracteristicas']);
  };
  redireccionarCont(){
    this._router.navigate(['contacto']);
  }
}
