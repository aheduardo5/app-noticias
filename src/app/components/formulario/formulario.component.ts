import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = '';
  paisSeleccionado = ''
  formHeader: string;
  categorias: any[] = [
    {
      value: '',
      name: 'Selecciona una categoria',
    },
    {
      value: 'general',
      name: 'General',
    },
    {
      value: 'business',
      name: 'Negocio',
    },
    {
      value: 'entertainment',
      name: 'Entretenimiento',
    },
    {
      value: 'health',
      name: 'Salud',
    },
    {
      value: 'science',
      name: 'Ciencia',
    },
    {
      value: 'sports',
      name: 'Deportes',
    },
    {
      value: 'techonology',
      name: 'Tecnologia',
    },
  ];
  paises: any[] = [
    {
      value: '',
      name: 'Selecciona un pais',
    },
    {
      value:'mx',
      name: 'Mexico'
    },
    {
      value:'ar',
      name: 'Argentina'
    },
    {
      value: 'br',
      name: 'Brasil',
    },
    {
      value: 'fr',
      name: 'Francia',
    },
    {
      value: 'hu',
      name: 'Hungria',
    },
    {
      value: 'gb',
      name: 'Reino Unido',
    },
  ];
  constructor() {
    this.formHeader = 'Filtra noticias por pais y categoria';
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS); 
  }
}
