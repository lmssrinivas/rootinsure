import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule } from "@angular/router";
import { AppRouterConfig } from "./app.routing";
import { CardComponent } from './shared/card/card.component'
import { FontAwesomeModule } from 'ngx-icons';
import { CarComponent } from './car/car.component';
import { DentalComponent } from './dental/dental.component';
import { MedicalComponent } from './medical/medical.component';
import { ClaimsComponent } from './claims/claims.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CarComponent,
    DentalComponent,
    MedicalComponent,
    ClaimsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      AppRouterConfig,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
