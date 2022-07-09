import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  DJANGO_SERVER: string = "http://127.0.0.1:8000";
  constructor(private http: HttpClient) { }

  public upload(formData: any) {
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/`, formData);
  }
}