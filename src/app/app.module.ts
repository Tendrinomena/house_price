import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppHomeComponent } from './app-home/app-home.component';
import { NavComponent } from './app-home/nav/nav.component';
import { HeaderComponent } from './app-home/header/header.component';
import { AppPredictComponent } from './app-predict/app-predict.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    NavComponent,
    HeaderComponent,
    AppPredictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
