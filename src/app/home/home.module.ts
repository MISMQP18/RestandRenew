import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app/app.component';
import { NgCalendarModule  } from 'ionic2-calendar';
import {HomePage } from '../pages/home/home';
import { CalendarModule } from 'ionic3-calendar-en';

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        NgCalendarModule,
        CalendarModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ]
})
export class AppModule {}