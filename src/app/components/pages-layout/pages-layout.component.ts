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

  establishmentData: any;

  features: Features = [];

  featureEnum: any = FeatureEnum;
  isOpen: boolean = false;
  title: string = 'Mesas';
  selectedFeature: number = 1;
  selectedEstablishment: any;
  establishmentId: string = '';

  constructor() {}

  ngOnInit(): void {
    this.selectedEstablishment = history.state.selectedEstablishment;

    if (this.selectedEstablishment?.data?.features.length > 0) {
      this.features = this.selectedEstablishment?.data?.features;
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  navigateTo(featureId: number) {
    // const feature = this.features.find((f) => f.id === featureId);
    // this.selectedFeature = featureId;
    // this.title = feature?.nome || '';
    // this.isOpen = false;
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomMenuComponent, {
      panelClass: 'custom-bottom-sheet-container',
      data: { features: this.features },
    });
  }

  getEstablishmentUserFeatures() {}
}
