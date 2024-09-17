import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(document: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('/login', { document, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('name', value.name);
          sessionStorage.setItem('establishments', JSON.stringify(value.establishments));
        })
      );
  }
}
