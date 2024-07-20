import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { TaskReducer } from './tasks/reducer/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffect } from './home/reducer/home.effect';
import { SyncReducer } from './home/reducer/home.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({
      tasks: TaskReducer,
      sync: SyncReducer,
    }),
    EffectsModule.forRoot([HomeEffect]),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
