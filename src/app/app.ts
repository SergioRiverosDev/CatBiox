import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecero } from "./cabecero/cabecero";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecero, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('catbiox');
}
