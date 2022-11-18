import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { WaitComponent } from './components/wait/wait.component';
import { PayementComponent } from './components/payement/payement.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [AppComponent, MainComponent, WaitComponent, PayementComponent, StartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
