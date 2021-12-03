import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './menue/navbar/navbar.component';
import { AProposComponent } from './composants/a-propos/a-propos.component';
import { HomeComponent } from './composants/home/home.component';
import { HotelsComponent } from './composants/hotels/hotels.component';
import { DetailhotComponent } from './composants/detailhot/detailhot.component';
import { FiltreComponent } from './composants/filtre/filtre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HammerGestureConfig,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammers from 'hammerjs';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ChambreComponent } from './composants/chambre/chambre.component';
import { GestionComponent } from './composants/gestion/gestion.component';
import { AdminComponent } from './composants/gestion/admin/admin.component';
import { LoginComponent } from './composants/gestion/login/login.component';
import { FooterComponent } from './composants/footer/footer.component';
import { Error404Component } from './composants/error404/error404.component';


export class CustomHammerConfig extends HammerGestureConfig{
  override = {
    'pan':{
      direction:Hammers.direction_ALL,
    }
   
   
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AProposComponent,
    HomeComponent,
    HotelsComponent,
    DetailhotComponent,
    FiltreComponent,
    ChambreComponent,
    GestionComponent,
    AdminComponent,
    LoginComponent,
    FooterComponent,
    Error404Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxGalleryModule,
    HttpClientModule
  ],
  providers: [
    {provide:HAMMER_GESTURE_CONFIG,useClass:CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
