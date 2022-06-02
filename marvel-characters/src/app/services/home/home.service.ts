import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

import { Characters } from 'src/app/models/characters';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public _url = `${environment.serverUrl}/characters?ts=${environment.timeStemp}&apikey=${environment.apiKey}&hash=${environment.hash}`;

  constructor(private http: HttpClient) {  }

  getCharacters(): Observable<Characters[]> {
    return this.http.get(`${this._url}&limit=10`, {
      headers: new HttpHeaders()
    }).pipe(map((resp: any) => (resp?.data?.results) ));
  }
}
