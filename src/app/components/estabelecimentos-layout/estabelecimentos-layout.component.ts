import { Component } from '@angular/core';

@Component({
  selector: 'app-estabelecimentos-layout',
  standalone: true,
  imports: [],
  templateUrl: './estabelecimentos-layout.component.html',
  styleUrl: './estabelecimentos-layout.component.scss'
})
export class EstabelecimentosLayoutComponent {

  selecionaEstabelecimento(event: any){
    console.log(event);

  }
}
