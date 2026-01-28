import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'splash',
    loadComponent: () =>
      import('./features/splash/splash.page').then((m) => m.SplashPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'donaciones',
    loadComponent: () =>
      import('./features/donaciones/donaciones.page').then((m) => m.DonacionesPage),
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
];
