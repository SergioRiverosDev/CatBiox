import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Whatsapp {

  enviarWhatsApp() {
    const numero = "3125401886";
    const mensaje = "Hola, estoy interesado en el producto Arena para gatos CatBiox.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }

}
