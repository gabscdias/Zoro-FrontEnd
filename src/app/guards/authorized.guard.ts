import { Injectable } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard {
  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.loginService.getLoginState()) {
      this.toastr.info('Por favor faça o login!');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
