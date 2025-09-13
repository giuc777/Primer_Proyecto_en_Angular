import { Component } from '@angular/core';
import { comentario } from '../../interfaces/comentario';


@Component({
  selector: 'app-ver-comentario',
  imports: [],
  templateUrl: './ver-comentario.html',
  styleUrl: './ver-comentario.scss'
})
export class VerComentario {
  comentario: comentario;
  constructor(){
    this.comentario={
      titulo: 'Comentario 1',
      creador: 'Usuario 1',
      texto: 'Comentario de prueba',
      fechaCreacion: new Date('2023-01-01')
    }
  }
}
