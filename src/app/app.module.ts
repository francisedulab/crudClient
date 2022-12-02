import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotfoundComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
