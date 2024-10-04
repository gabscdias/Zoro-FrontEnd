import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { Establishments } from '../models/establishments.model';

export interface EstablishmentLoginRequest {
  applicationUserId: string;
  establishmentId: string;
}

@Injectable({
  providedIn: 'root',
})

export class EstablishmentUserService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getEstablishmentsUser(): Observable<Establishments> {
    return this.httpClient.get<Establishments>(
      `${this.apiUrl}/v1/establishmentUsers`
    );
  }

  establishmentLogin(estabelecimento: any): Observable<object> {
    const request: EstablishmentLoginRequest = {
      applicationUserId: '',
      establishmentId: '',
    };

    return this.httpClient
      .post<any>(`${this.apiUrl}/v1/establishmentUsers/login`, request)
      .pipe(
        tap((response) => {
          console.log(response);
        })
      );
  }
}
