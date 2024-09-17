import { Component } from '@angular/core';
import { EntregadorLayoutComponent } from '../../components/entregador-layout/entregador-layout.component';

@Component({
  selector: 'app-entregador',
  standalone: true,
  imports: [EntregadorLayoutComponent],
  templateUrl: './entregador.component.html',
  styleUrl: './entregador.component.scss',
})
export class EntregadorComponent {}
