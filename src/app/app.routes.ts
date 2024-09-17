import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';
import { CozinhaComponent } from './pages/cozinha/cozinha.component';
import { EntregadorComponent } from './pages/entregador/entregador.component';

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
  },
  {
    path: 'cozinha',
    component: CozinhaComponent,
  },
  {
    path: 'entregador',
    component: EntregadorComponent,
  },
];

