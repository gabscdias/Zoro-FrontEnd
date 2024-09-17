import { AfterViewInit, Component } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  latitude: number = -19.967056;
  longitude: number = -44.056889;
  latitudeSimulada = -19.9514352;
  longitudeSimulada = -44.0631296;

  private map: Map | undefined;
  private marker: Feature | undefined;
  private subscription: Subscription | undefined;

  constructor(private geolocationService: GeolocationService) {}

  ngAfterViewInit(): void {
    this.initMap();

    // Enviar a localização periodicamente usando o serviço - Serviço iniciado pelo motoboy
    this.geolocationService.startSendingLocation().subscribe((location) => {});

    // Atualizar a localização periodicamente usando o serviço
    this.subscription = this.geolocationService
      .getLocationUpdates(1)
      .subscribe((location) => {
        this.updateMarker(location.latitude, location.longitude);
      });
  }

  ngOnDestroy(): void {
    // Cancelar a subscrição quando o componente for destruído
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    // this.geolocationService.startSendingLocation().subscribe(
    //   () => {
    //     this.initMap();
    //     setTimeout(() => {
    //       if (this.map) {
    //         this.map.invalidateSize();
    //       }
    //     }, 0);
    //     this.trackLocation();
    //   },
    //   (error) => console.error('Error sending location:', error)
    // );
  }

  initMap(): void {
    // Inicializar o mapa
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-46.633308, -23.55052]), // Posição inicial (São Paulo)
        zoom: 16,
      }),
    });

    // Criar uma feature para o marcador
    this.marker = new Feature({
      geometry: new Point(fromLonLat([-46.633308, -23.55052])),
    });

    // Aplicar o ícone da moto ao marcador
    this.marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1], // Ajusta o ponto de ancoragem para o ícone
          src: 'assets/images/motorcycle-pin.png', // Caminho da imagem da moto
          scale: 0.1, // Escala do ícone, ajuste conforme o tamanho da imagem
        }),
      })
    );

    // Criar uma camada de vetor para o marcador
    const vectorSource = new VectorSource({
      features: [this.marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Adicionar a camada de marcador no mapa
    this.map.addLayer(vectorLayer);
  }

  updateMarker(latitude: number, longitude: number): void {
    if (this.marker) {
      const coords = fromLonLat([longitude, latitude]);
      this.marker.setGeometry(new Point(coords));

      // Ajustar o centro do mapa para acompanhar o marcador
      this.map?.getView().setCenter(coords);
    }
  }
}
