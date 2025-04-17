import { Routes } from '@angular/router';

import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';


export const routes: Routes = [
    { path: '', component:HomeComponent }, // optional default
    { path: 'home',component:HomeComponent},
    { path: 'pipes', component: PipesComponent },
    { path: 'routing',component:RoutingComponent},
];
