import { CalendarModule } from 'ionic3-calendar-en';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

@NgModule({
    imports: [
        CalendarModule,
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: HomePage }])
    ],
    declarations: [HomePage]
})
export class HomePageModule {}
