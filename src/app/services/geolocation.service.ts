// geolocation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private apiUrl = 'https://your-server-api.com/location'; // Substitua pela URL do seu servidor
  private updateInterval = 10000; // Intervalo em milissegundos para enviar a localização (10 segundos)

  constructor(private http: HttpClient) {}

  startSendingLocation(): Observable<void> {
    return interval(this.updateInterval).pipe(
      switchMap(() => this.getCurrentLocation()),
      switchMap(location => this.sendLocation(location)),
      catchError(error => {
        console.error('Error in location handling:', error);
        return of(); // Retorna um Observable vazio em caso de erro
      })
    );
  }

  private getCurrentLocation(): Observable<GeolocationPosition> {
    return new Observable<GeolocationPosition>(observer => {
      const options: PositionOptions = {
        enableHighAccuracy: true, // Tenta usar GPS para obter a localização mais precisa
        timeout: 10000, // Tempo máximo para a solicitação (10 segundos)
        maximumAge: 0 // Sempre solicita a localização mais recente
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => observer.next(position),
          error => observer.error(error),
          options
        );
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }

  private sendLocation(position: GeolocationPosition): Observable<any> {
    const locationData = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }; 
    console.log(locationData);
    
    sessionStorage.setItem('locationData', JSON.stringify(locationData) );
    return of(locationData);
  }
}




