import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { HttpClientModule } from '@angular/common/http';
import { ParticulardataComponent } from './particulardata/particulardata.component';
import { MainComponent } from './main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    DisplaydataComponent,
    ParticulardataComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
