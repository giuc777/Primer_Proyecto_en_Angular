import { Routes } from '@angular/router';
import { ListComentarios } from './componets/list-comentarios/list-comentarios';
import { AgregarEditarComentario } from './componets/agregar-editar-comentario/agregar-editar-comentario';
import { VerComentario } from './componets/ver-comentario/ver-comentario';


export const routes: Routes = [
    {path:'', component: ListComentarios},
    {path:'agregar', component: AgregarEditarComentario},
    {path:'editar/:id', component: AgregarEditarComentario},
    {path:'ver/:id', component:VerComentario},
    {path:'**', redirectTo:'', pathMatch:'full'}
];
