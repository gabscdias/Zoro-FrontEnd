import { Component, inject, Input, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MesasLayoutComponent } from '../mesas-layout/mesas-layout.component';
import { HistoricoLayoutComponent } from '../historico-layout/historico-layout.component';
import { AjustesLayoutComponent } from '../ajustes-layout/ajustes-layout.component';
import { DeliveryLayoutComponent } from '../delivery-layout/delivery-layout.component';
import { ConfiguracoesLayoutComponent } from '../configuracoes-layout/configuracoes-layout.component';
import { Features } from '../../types/features.type';
import { CommonModule } from '@angular/common';
import { EntregadorLayoutComponent } from '../entregador-layout/entregador-layout.component';
import {
  MatBottomSheetModule,
  MatBottomSheet,
} from '@angular/material/bottom-sheet'; // Importação corrigida
import { BottomMenuComponent } from '../bottom-menu/bottom-menu.component';
import { FeatureEnum } from '../../Enums/features.enum';

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
    EntregadorLayoutComponent,
    MatBottomSheetModule, // Corrigido: Importação do MatBottomSheetModule aqui
  ],
  templateUrl: './pages-layout.component.html',
  styleUrls: ['./pages-layout.component.scss'],
})
export class PagesLayoutComponent implements OnInit {
  private _bottomSheet = inject(MatBottomSheet);

  @Input() features: Features = [
    {
      Id: 1,
      Name: 'Mesas',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: '',
    },
    {
      Id: 2,
      Name: 'Ajustes',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: '',
    },
    {
      Id: 3,
      Name: 'Histórico',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: '',
    },
    {
      Id: 4,
      Name: 'Delivery',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: '',
    },
    {
      Id: 5,
      Name: 'Configurações',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: '',
    },
    {
      Id: 6,
      Name: 'Entregadores',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: '',
    },
  ];

  featureEnum: any = FeatureEnum;
  isOpen: boolean = false;
  title: string = 'Mesas';
  selectedFeature: number = 1;
  selectedEstablishment: any;
  establishmentId: string = '';

  constructor() {}

  ngOnInit(): void {
    debugger;
    this.selectedEstablishment = JSON.parse(
      localStorage.getItem('estabelecimentoSelecionado') || '[]'
    );
    if (
      this.selectedEstablishment !== null ||
      this.selectedEstablishment !== undefined
    ) {
      this.establishmentId = this.selectedEstablishment.id;
      this.getEstablishmentUserFeatures();
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  navigateTo(featureId: number) {
    const feature = this.features.find((f) => f.Id === featureId);
    this.selectedFeature = featureId;
    this.title = feature?.Name || '';
    this.isOpen = false;
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomMenuComponent, {
      panelClass: 'custom-bottom-sheet-container',
    });
  }

  getEstablishmentUserFeatures() {}
}
