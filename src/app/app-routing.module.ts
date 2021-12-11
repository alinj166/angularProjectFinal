import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './composants/a-propos/a-propos.component';
import { DetailhotComponent } from './composants/detailhot/detailhot.component';
import { Error404Component } from './composants/error404/error404.component';
import { AdminComponent } from './composants/gestion/admin/admin.component';
import { LoginComponent } from './composants/gestion/login/login.component';
import { RechComponent } from './composants/gestion/rech/rech.component';
import { HomeComponent } from './composants/home/home.component';
import { HotelsComponent } from './composants/hotels/hotels.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'propos', component:AProposComponent},
  {path:'hotels', component:HotelsComponent},
  {path:'hotels/:id',component:DetailhotComponent},
  {path:'detailhot/:id',component:DetailhotComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'rech',component:RechComponent},

  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
