import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../members/home/home.page';
import { SettingsPage } from '../settings/settings.page';
import { LoginPage } from '../login/login.page';
import { EditPage } from '../edit/edit.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'settings',
        outlet: 'settings',
        component: SettingsPage
      }/*,
        {
            path: 'edit',
            outlet: 'edit',
            component: EditPage
        }*/
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}