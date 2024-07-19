import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [CommonModule, IonicModule, HomePageRoutingModule,],
  declarations: [TasksComponent],
})
export class TasksModule {}
