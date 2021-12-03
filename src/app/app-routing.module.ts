import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './composants/a-propos/a-propos.component';
import { DetailhotComponent } from './composants/detailhot/detailhot.component';
import { LoginComponent } from './composants/gestion/login/login.component';
import { HomeComponent } from './composants/home/home.component';
import { HotelsComponent } from './composants/hotels/hotels.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'propos', component:AProposComponent},
  {path:'hotels', component:HotelsComponent},
  {path:'hotels/:id',component:DetailhotComponent},
  {path:'detailhot/:id',component:DetailhotComponent},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
