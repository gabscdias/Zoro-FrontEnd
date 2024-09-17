import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { PagesLayoutComponent } from '../pages-layout/pages-layout.component';

@Component({
  selector: 'app-entregador-layout',
  standalone: true,
  imports: [PagesLayoutComponent, MapComponent],
  templateUrl: './entregador-layout.component.html',
  styleUrl: './entregador-layout.component.scss',
})
export class EntregadorLayoutComponent {}
