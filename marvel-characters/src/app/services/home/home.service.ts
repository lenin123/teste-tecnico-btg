import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';


import { Characters } from 'src/app/models/characters';
import { Creators } from './../../models/creators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public _url = `${environment.serverUrl}/`;
  public _paramUrl = `?ts=${environment.timeStemp}&apikey=${environment.apiKey}&hash=${environment.hash}&limit=4`;

  constructor(private http: HttpClient) {  }

  getCharacters(): Observable<Characters[]> {
    return this.http.get(`${this._url}/characters${this._paramUrl}`, {
      headers: new HttpHeaders()
    }).pipe(map((resp: any) => (resp?.data?.results) ));
  }

  getCreators(): Observable<Creators[]> {
    return this.http.get(`${this._url}/creators${this._paramUrl}`, {
      headers: new HttpHeaders()
    }).pipe(map((resp: any) => (resp?.data?.results) ));
  }
}
