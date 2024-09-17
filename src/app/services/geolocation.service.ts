// geolocation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private apiUrl = 'https://your-server-api.com/location'; // Substitua pela URL do seu servidor
  private updateInterval = 2000; // Intervalo em milissegundos para enviar a localização (10 segundos)

  constructor(private http: HttpClient) {}

  startSendingLocation(): Observable<void> {
    return interval(this.updateInterval).pipe(
      switchMap(() => this.getCurrentLocation()),
      switchMap((location) => this.sendLocation(location)),
      catchError((error) => {
        console.error('Error in location handling:', error);
        return of(); // Retorna um Observable vazio em caso de erro
      })
    );
  }

  getCurrentLocation(): Observable<GeolocationPosition> {
    return new Observable<GeolocationPosition>((observer) => {
      const options: PositionOptions = {
        enableHighAccuracy: true, // Tenta usar GPS para obter a localização mais precisa
        timeout: 10000, // Tempo máximo para a solicitação (10 segundos)
        maximumAge: 0, // Sempre solicita a localização mais recente
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => observer.next(position),
          (error) => observer.error(error),
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
      longitude: position.coords.longitude,
    };
    // console.log(locationData);

    sessionStorage.setItem('locationData', JSON.stringify(locationData));
    return of(locationData);
  }

  public getLocationUpdates(
    motoboyId: number
  ): Observable<{ latitude: number; longitude: number }> {
    return interval(2000).pipe(
      // Atualiza a cada 5 segundos
      map(() => {
        let locationData = {
          latitude: 0,
          longitude: 0,
        };

        const currentLocation = sessionStorage.getItem('locationData');

        if (currentLocation) {
          const parsedLocation = JSON.parse(currentLocation);
          locationData.latitude = parsedLocation.latitude;
          locationData.longitude = parsedLocation.longitude;
        }

        console.log(locationData);

        // Exemplo de alteração das coordenadas (simulação)
        // this.currentLocation.latitude += 0.0001;  // Simular movimentação
        // this.currentLocation.longitude += 0.0001;
        return locationData;
      })
    );
  }
}
