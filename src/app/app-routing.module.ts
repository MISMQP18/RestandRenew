import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },

    {
        path: '',
        canActivate: [AuthGuardService],
        loadChildren: './tabs/tabs.module#TabsPageModule'
    },
    { path: 'details/:id', loadChildren: './page/habit-details/habit-details.module#HabitDetailsPageModule' },
    { path: 'details', loadChildren: './page/habit-details/habit-details.module#HabitDetailsPageModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
    { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'summary', loadChildren: './summary/summary.module#SummaryPageModule' },
  { path: 'habitDetails', loadChildren: './page/habit-details/habit-details.module#HabitDetailsPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/*testing 12/20
{
        path: 'members',
        canActivate: [AuthGuardService],
        loadChildren: './members/member-routing.module#MemberRoutingModule'
    },

*/