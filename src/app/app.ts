import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './componets/navbar/navbar';
import { ListComentarios } from './componets/list-comentarios/list-comentarios';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ListComentarios],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Proyect_1');
}