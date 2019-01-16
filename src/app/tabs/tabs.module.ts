import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { MemberRoutingModule } from '../members/member-routing.module';

import { TabsPage } from './tabs.page';
import { SettingsPageModule } from '../settings/settings.module';
import { HomePageModule } from '../members/home/home.module';
import { SummaryPageModule } from '../summary/summary.module';
import { JournalsPageModule } from '../journals/journals.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    MemberRoutingModule,
    HomePageModule,
    SettingsPageModule,
    SummaryPageModule,
      JournalsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
