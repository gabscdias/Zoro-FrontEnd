import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-estabelecimentos-layout',
  standalone: true,
  imports: [LogoutButtonComponent, CommonModule, NzAvatarModule, NzGridModule ],
  templateUrl: './estabelecimentos-layout.component.html',
  styleUrl: './estabelecimentos-layout.component.scss',
})
export class EstabelecimentosLayoutComponent implements OnInit {
  estabelecimentos: any[] = [];
  filteredData = this.estabelecimentos;
  usuarioLogado: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || '[]');
    const estabelecimentos = JSON.parse(localStorage.getItem('estabelecimentos') || '[]');
    this.filteredData = estabelecimentos;
  }

  selecionarEstabelecimento(estabelecimento: any){
    localStorage.setItem('estabelecimentoSelecionado', JSON.stringify(estabelecimento));
    this.router.navigate(['/index']);
  }
}
