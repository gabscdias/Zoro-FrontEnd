import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { EstablishmentUserService } from '../../services/establishment-user.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-estabelecimentos-layout',
  standalone: true,
  imports: [
    LogoutButtonComponent,
    CommonModule,
    NzAvatarModule,
    NzGridModule,
    LoadingComponent,
  ],
  templateUrl: './estabelecimentos-layout.component.html',
  styleUrl: './estabelecimentos-layout.component.scss',
})
export class EstabelecimentosLayoutComponent implements OnInit {
  estabelecimentos: any[] = [];
  filteredData = this.estabelecimentos;
  usuarioLogado: any;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private establishmentUserService: EstablishmentUserService
  ) {}

  ngOnInit(): void {
    this.usuarioLogado = JSON.parse(
      localStorage.getItem('usuarioLogado') || '[]'
    );
    const estabelecimentos = JSON.parse(
      localStorage.getItem('estabelecimentos') || '[]'
    );
    this.filteredData = estabelecimentos;
  }

  selecionarEstabelecimento(establishment: any) {
    this.isLoading = true;
    if (establishment?.id) {
      this.establishmentUserService
        .establishmentLogin(establishment.id)
        .subscribe((data) => {
          this.router.navigate(['/index'], {
            state: { selectedEstablishment: data },
          }); // Passa o data no state
        });
    } else {
      this.isLoading = true;
    }
  }
}
