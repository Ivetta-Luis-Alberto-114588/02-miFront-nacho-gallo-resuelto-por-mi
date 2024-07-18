import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/country';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url="http://localhost:8000/"
  country="./assets/data/countryStates.ts"

  constructor(private http: HttpClient) { }

  getAllCountries():Observable<ICountry[]>{
    return this.http.get<ICountry[]>(this.country)
  }

  updataUser(user: IUser): Observable<IUser>{

    let token =  JSON.parse( sessionStorage.getItem('token') || '{}')

    let headers = {'Authorization': `Bearer ${token}` }

    return this.http.put<IUser>(`${this.url}users/${user.id}`, user, {headers:headers})
  }

  getUserById(): Observable<IUser>{

    const token = JSON.parse( sessionStorage.getItem('token') || "{}")

    const headers = {
      'Authorization':  `Bearer ${token}`
    }

    const id =  JSON.parse (sessionStorage.getItem('id') || "{}")

    return this.http.get<IUser>(`${this.url}users/${id}`, {headers:headers} )

  }


}
