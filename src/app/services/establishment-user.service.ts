import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Establishments } from '../models/establishments.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentUserService {
  private apiUrl = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) { }

  getEstablishmentsUser(): Observable<Establishments>{
    return this.httpClient.get<Establishments>(`${this.apiUrl}/v1/establishmentUsers`);
  }
}
