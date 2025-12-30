import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'batiments',
        loadChildren: () =>
          import('../batiments/batiments.routes').then((m) => m.BATIMENTS_ROUTES),
      },
      {
        path: 'carte',
        loadComponent: () =>
          import('../carte/carte.page').then((m) => m.CartePage),
      },
      {
        path: 'actions',
        loadComponent: () =>
          import('../actions/actions.page').then((m) => m.ActionsPage),
      },
      {
        path: 'alertes',
        loadComponent: () =>
          import('../alertes/alertes.page').then((m) => m.AlertesPage),
      },
      {
        path: '',
        redirectTo: '/tabs/batiments',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/tabs/batiments',
  },
];
