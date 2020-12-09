import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SuccessComponent} from './components/success/success.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'success', component: SuccessComponent},
];

export const appRoutingModule = RouterModule.forRoot(routes, {useHash: false});

