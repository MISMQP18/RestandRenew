import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app/app.component';
import { NgCalendarModule  } from 'ionic2-calendar';
import {HomePage } from '../pages/home/home';


@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        NgCalendarModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ]
})
export class AppModule {}