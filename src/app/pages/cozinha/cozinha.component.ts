import { Component } from '@angular/core';
import { CozinhaLayoutComponent } from '../../components/cozinha-layout/cozinha-layout.component';

@Component({
  selector: 'app-cozinha',
  standalone: true,
  imports: [CozinhaLayoutComponent],
  templateUrl: './cozinha.component.html',
  styleUrl: './cozinha.component.scss'
})
export class CozinhaComponent {

}
