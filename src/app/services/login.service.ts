import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginRequest } from '../types/login-request.type';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl; // Usa a URL configurada

  constructor(private httpClient: HttpClient) {}

  login(loginRequst: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
      .post<any>(
        `${this.apiUrl}/identity/customLogin`,
        loginRequst
      )
      .pipe(
        tap((response) => {
          // Salva o token (por exemplo, no localStorage)
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
        })
      );
  }

  getLoginState() {
    return !!localStorage.getItem('accessToken');
  }
  
  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('usuarioLogado');
  }
}
