import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JournalModule } from './journal/journal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JournalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
