import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css'],
})
export class ListadoNoticiasComponent {
  buttonTitle:string = 'Ir a la noticia completa'
  @Input() listNoticias: any[] = [];
}