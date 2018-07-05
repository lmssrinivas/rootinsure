import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

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
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
