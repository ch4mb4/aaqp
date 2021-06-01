import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RequerimientoService {

  private baseUrl = 'http://localhost:8080/requerimiento/';

  constructor(private http:HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'list');
  }

  insert(Requerimiento: object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'insert', Requerimiento);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }

  get(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}get/${id}`);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}update/${id}`, value);
  }  
}                                           