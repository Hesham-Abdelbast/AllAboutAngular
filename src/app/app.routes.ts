import { Routes } from '@angular/router';

import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';
import { FormsComponent } from './forms/forms.component';
import { TranslationComponent } from './translation/translation.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


export const routes: Routes = [
    { path: '', component:HomeComponent }, // optional default
    { path: 'home',component:HomeComponent},
    { path: 'pipes', component: PipesComponent },
    { path: 'routing',component:RoutingComponent},
    { path: 'routing/:id',component:RoutingComponent},
    { path: 'forms',component:FormsComponent},
    { path: 'translate',component:TranslationComponent},
    { path: 'reactiveform', component: ReactiveFormComponent }

];
