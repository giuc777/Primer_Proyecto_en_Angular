import { Component } from '@angular/core';
import { comentario } from '../../interfaces/comentario';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list-comentarios',
  imports: [NgForOf, RouterLink],
  templateUrl: './list-comentarios.html',
  styleUrl: './list-comentarios.scss'
})
export class ListComentarios {
  ListComentarios: comentario[] =[
    //{La interfaz }
    {titulo:'Comentario 5', creador:'Uribe', texto:'Escrito por mi', fechaCreacion: new Date('2025-06-08')},
    {titulo:'Comentario 6', creador:'Estuardo', texto:'Marzo sin ti', fechaCreacion: new Date('2025-04-12')},
    {titulo:'Comentario 4', creador:'Bill Gates', texto:'Yo no comento', fechaCreacion: new Date('2025-09-02')}
 
  ];
}
