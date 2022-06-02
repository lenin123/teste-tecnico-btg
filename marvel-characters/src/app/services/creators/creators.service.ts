import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

import { Creators } from './../../models/creators';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  public _url = `${environment.serverUrl}/creators?ts=${environment.timeStemp}&apikey=${environment.apiKey}&hash=${environment.hash}`;

  constructor(private http: HttpClient) {  }

  getCreators(): Observable<Creators[]> {
    return this.http.get(`${this._url}`, {
      headers: new HttpHeaders()
    }).pipe(map((resp: any) => (resp?.data?.results) ));
  }

}
