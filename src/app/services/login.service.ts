import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../interfaces/ilogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url=" http://localhost:8000/"

  constructor(private http: HttpClient) { }

  login(login: ILogin): Observable<any>{
    return this.http.post<any>(`${this.url}auth/login`, login)
  }
}
