import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: '**', redirectTo: '' }
];
