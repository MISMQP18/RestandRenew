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
    { path: 'edit/:id', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'summary', loadChildren: './summary/summary.module#SummaryPageModule' },
  { path: 'habitDetails', loadChildren: './page/habit-details/habit-details.module#HabitDetailsPageModule' },
  { path: 'journals', loadChildren: './journals/journals.module#JournalsPageModule' },
  { path: 'add-journal', loadChildren: './add-journal/add-journal.module#AddJournalPageModule' },
  { path: 'edit-journal', loadChildren: './edit-journal/edit-journal.module#EditJournalPageModule' },
    { path: 'edit-journal/:id', loadChildren: './edit-journal/edit-journal.module#EditJournalPageModule' },
  { path: 'view-journal', loadChildren: './view-journal/view-journal.module#ViewJournalPageModule' },
    { path: 'view-journal/:id', loadChildren: './view-journal/view-journal.module#ViewJournalPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

