import { Component, Inject, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FeatureEnum } from '../../Enums/features.enum';
import { Feature, Features } from '../../types/features.type';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-bottom-menu',
  standalone: true,
  imports: [
    MatListModule,
    MatGridListModule,
    CommonModule,
    MatIconModule,
    NzIconModule,
    LoadingComponent
  ],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.scss',
})
export class BottomMenuComponent {
  datafeatures: any;
  features: Features = [];

  logout: Feature = {
    id: '',
    nome: 'Logout',
    descricao: '',
    ativo: true,
    itemMenu: true,
    icon: 'logout',
    navegacao: '/logout',
  };

  featureEnum: any = FeatureEnum;

  isOpen: boolean = true; // controla se o menu está aberto
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private _bottomSheetRef: MatBottomSheetRef<BottomMenuComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { features: Features[] }
  ) {
    this.datafeatures = this.data.features;
    this.features = this.datafeatures.filter(
      (x: { itemMenu: boolean }) => x.itemMenu == true
    );

    const estabelecimentos = JSON.parse(
      localStorage.getItem('estabelecimentos') || '[]'
    );

    if (estabelecimentos.length > 1) {
      let backEstablishment: Feature = {
        id: '',
        nome: 'Estabelecimentos',
        descricao: '',
        ativo: true,
        itemMenu: true,
        icon: 'shop',
        navegacao: '/estabelecimentos',
      };

      this.features.push(backEstablishment);
    }

    this.features.push(this.logout);
  }

  closeMenu() {
    this._bottomSheetRef.dismiss();
    console.log('Menu fechado ao deslizar para baixo');
  }

  navigate(item: any) {
    this.isLoading = true;
    this.closeMenu();
    
    if (item.navegacao === '/logout') {
      this.loginService.logout();
      this.router.navigate(['/login']);
    } else if (item.navegacao === '/estabelecimentos') {
      this.router.navigate(['/estabelecimentos']);
    } else {
      this.isLoading = false;
    }
  }
}
