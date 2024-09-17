import { Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-entregador-layout',
  standalone: true,
  imports: [],
  templateUrl: './entregador-layout.component.html',
  styleUrl: './entregador-layout.component.scss',
})
export class EntregadorLayoutComponent {
  constructor(private geolocationService: GeolocationService) {}

  cordenadas: string[] = [];

  ngOnInit(): void {
    this.geolocationService.startSendingLocation().subscribe(
      () => this.retrieveLocationData(),
      (error) => console.error('Error sending location:', error)
    );
  }

  retrieveLocationData(): void {
    console.log('Location sent successfully.')
    this.cordenadas.push(sessionStorage.getItem('locationData') || '');

    // if (storedLocationData) {
    //   const locationData = JSON.parse(storedLocationData);
    //   console.log('Stored Location Data:', locationData);
    //   // Faça algo com os dados da localização
    //   this.cordenadas = locationData;
    // } else {
    //   console.log('No location data found.');
    // }
  }
}
