import { Routes } from '@angular/router';

export const BATIMENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./batiments.page').then(m => m.BatimentsPage),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./batiment-detail/batiment-detail.component').then(m => m.BatimentDetailComponent)
  }
];
