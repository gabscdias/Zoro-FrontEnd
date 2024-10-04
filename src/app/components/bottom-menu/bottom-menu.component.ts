import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FeatureEnum } from '../../Enums/features.enum';
import { Features } from '../../types/features.type';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-bottom-menu',
  standalone: true,
  imports: [
    MatListModule,
    MatGridListModule,
    CommonModule,
    MatIconModule,
    NzIconModule,
  ],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.scss',
})
export class BottomMenuComponent {
  @Input() features: Features = [
    {
      Id: 1,
      Name: 'Mesas',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: 'table',
    },
    {
      Id: 2,
      Name: 'Ajustes',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: 'control',
    },
    {
      Id: 3,
      Name: 'Histórico',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: 'read',
    },
    {
      Id: 4,
      Name: 'Delivery',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: 'rocket',
    },
    {
      Id: 5,
      Name: 'Configurações',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: 'setting',
    },
    {
      Id: 6,
      Name: 'Entregadores',
      Description: '',
      Ativo: true,
      ItemMenu: true,
      Icon: 'rocket',
    },
  ];

  featureEnum: any = FeatureEnum;

  isOpen: boolean = true; // controla se o menu está aberto

  closeMenu() {
    this.isOpen = false;
    console.log('Menu fechado ao deslizar para baixo');
  }
}
