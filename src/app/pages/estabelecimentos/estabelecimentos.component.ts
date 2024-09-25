import { Component } from '@angular/core';
import { EstabelecimentosLayoutComponent } from '../../components/estabelecimentos-layout/estabelecimentos-layout.component';

@Component({
  selector: 'app-estabelecimentos',
  standalone: true,
  imports: [EstabelecimentosLayoutComponent],
  templateUrl: './estabelecimentos.component.html',
  styleUrl: './estabelecimentos.component.scss'
})
export class EstabelecimentosComponent {

}
