import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss',
})
export class LogoutButtonComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  logOut() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
