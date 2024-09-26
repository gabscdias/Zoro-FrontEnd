import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { CozinhaComponent } from './pages/cozinha/cozinha.component';
import { EntregadorComponent } from './pages/entregador/entregador.component';
import { AuthorizedGuard } from './guards/authorized.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AuthorizedGuard]
  },
  {
    path: 'cozinha',
    component: CozinhaComponent,
    canActivate: [AuthorizedGuard]
  },
  {
    path: 'entregador',
    component: EntregadorComponent,
    canActivate: [AuthorizedGuard]
  },
];

