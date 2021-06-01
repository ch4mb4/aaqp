import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  insert(requerimiento: object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'insert', requerimiento);
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

  upload(formData:FormData){
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append("Content-Type", 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');
    return this.http.post(this.baseUrl+'upload', formData,{
      headers: headers
   })
  };
}                                           