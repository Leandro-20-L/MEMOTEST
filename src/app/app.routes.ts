import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'facil',
    loadComponent: () => import('./facil/facil.page').then( m => m.FacilPage)
  },
  {
    path: 'medio',
    loadComponent: () => import('./medio/medio.page').then( m => m.MedioPage)
  },
  {
    path: 'dificil',
    loadComponent: () => import('./dificil/dificil.page').then( m => m.DificilPage)
  },
  {
    path: 'top',
    loadComponent: () => import('./top/top.page').then( m => m.TopPage)
  },
  {
    path: 'ranking-facil',
    loadComponent: () => import('./ranking-facil/ranking-facil.page').then( m => m.RankingFacilPage)
  },
  {
    path: 'ranking-media',
    loadComponent: () => import('./ranking-media/ranking-media.page').then( m => m.RankingMediaPage)
  },
  {
    path: 'ranking-dificil',
    loadComponent: () => import('./ranking-dificil/ranking-dificil.page').then( m => m.RankingDificilPage)
  },
  
];
