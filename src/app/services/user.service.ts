import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl; // Usa a URL configurada
  
  constructor(private httpClient: HttpClient) { }

  getUserInfo(): Observable<object>{
    return this.httpClient.get<object>(`${this.apiUrl}/v1/users`);
  }
}
