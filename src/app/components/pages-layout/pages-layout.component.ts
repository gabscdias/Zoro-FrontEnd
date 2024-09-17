import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MesasLayoutComponent } from '../mesas-layout/mesas-layout.component';
import { HistoricoLayoutComponent } from '../historico-layout/historico-layout.component';
import { AjustesLayoutComponent } from '../ajustes-layout/ajustes-layout.component';
import { DeliveryLayoutComponent } from '../delivery-layout/delivery-layout.component';
import { ConfiguracoesLayoutComponent } from '../configuracoes-layout/configuracoes-layout.component';
import { Features } from '../../types/features.type';
import { FeatureEnum } from '../../Enums/features.enum';
import { CommonModule } from '@angular/common';
import { EntregadorLayoutComponent } from '../entregador-layout/entregador-layout.component';

@Component({
  selector: 'app-pages-layout',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NzIconModule,
    MesasLayoutComponent,
    HistoricoLayoutComponent,
    AjustesLayoutComponent,
    DeliveryLayoutComponent,
    ConfiguracoesLayoutComponent,
    EntregadorLayoutComponent
  ],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss',
})
export class PagesLayoutComponent {
  @Input() features: Features = [
    { Id: 1, Name: 'Mesas' },
    { Id: 2, Name: 'Ajustes' },
    { Id: 3, Name: 'Histórico' },
    { Id: 4, Name: 'Delivery' },
    { Id: 5, Name: 'Configurações' },
    { Id: 6, Name: 'Intregadores' },
  ];

  featureEnum: any = FeatureEnum;
  isOpen: boolean = false;
  title: string = 'Mesas';
  selectedFeature: number = 1;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  navigateTo(featureId: number) {
    const feature = this.features.find((f) => f.Id === featureId);
    this.selectedFeature = featureId;
    this.title = feature?.Name || '';
    this.isOpen = false;
  }
}
