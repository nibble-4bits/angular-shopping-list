import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemInputComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
