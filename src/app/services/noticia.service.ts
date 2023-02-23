import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private http: HttpClient) {}

  getNoticia(parametros: any):Observable<any> {
    const apiKey = '979d1fed73b04d81b0596d97c6adafef';
    const URL = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=${apiKey}`;
    return this.http.get(URL);
  }
  
}
