import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import {CarComponent} from "./car/car.component";
import {DentalComponent} from "./dental/dental.component";
import {MedicalComponent} from "./medical/medical.component";
import {ClaimsComponent} from "./claims/claims.component";

export const AppRouterConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: HomeComponent
  },
  {
    path: 'insurances',
    component: HomeComponent
  },
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: 'dental',
    component: DentalComponent
  },
  {
    path: 'medical',
    component: MedicalComponent
  },
  {
    path: 'coverage',
    component: MedicalComponent
  },
  {
    path: 'claims',
    component: ClaimsComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
