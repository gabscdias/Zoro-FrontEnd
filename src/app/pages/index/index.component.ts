import { Component } from '@angular/core';
import { PagesLayoutComponent } from '../../components/pages-layout/pages-layout.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [PagesLayoutComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
