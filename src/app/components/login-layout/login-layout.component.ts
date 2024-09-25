import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss',
})
export class LoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
  @Output('submit') onSubmit = new EventEmitter();
  @Output('navigate') onNavigate = new EventEmitter();
  isLoading: boolean = false;

  submit() {
    this.isLoading = true;
    this.onSubmit.emit();
  }

  navigate() {
    this.isLoading = true;
    this.onNavigate.emit();
  }
}
