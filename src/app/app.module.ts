import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitItemComponent } from './habit-item/habit-item.component';

@NgModule({
  declarations: [AppComponent, HabitListComponent, HabitItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
