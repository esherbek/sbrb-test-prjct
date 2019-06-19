import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    // Тут будут объявлены компоненты
    // Пример из тутора: https://angular.io/tutorial/toh-pt1#create-the-heroes-component
    
    DashboardComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class JournalModule { }
