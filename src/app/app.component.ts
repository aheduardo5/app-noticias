import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoticiaService } from './services/noticia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  listNoticias: any[] = [];
  headerTitle: string;
  title = 'app-noticias';
  private _noticiaSubscription: Subscription;

  constructor(private _noticiaService: NoticiaService) {
    this.headerTitle = 'Noticias';
    this._noticiaSubscription = new Subscription();
  }

  ngOnInit() {}

  ngOnDestroy() {
    // Se asegura de cancelar la suscripción cuando el componente se destruye
    if (this._noticiaSubscription) {
      this._noticiaSubscription.unsubscribe();
    }
  }

  buscarNoticias(parametros?: any) {
    // Cancela la suscripción anterior si existe
    if (this._noticiaSubscription) {
      this._noticiaSubscription.unsubscribe();
    }
    // Inicia una nueva suscripción
    this._noticiaSubscription = this._noticiaService
      .getNoticia(parametros)
      .subscribe((data) => {
        console.log(data);
        this.listNoticias = data.articles;
      }, error =>{
        console.log(error)
      });
  }
}
