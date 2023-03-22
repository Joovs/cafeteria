import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//inicio servicio
import { CargarScriptsService } from "./cargar-scripts.service";
//fin servicio

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FocosComponent } from './focos/focos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FocoComponent } from './focos/foco/foco.component';
import { VentiladorComponent } from './focos/ventilador/ventilador.component';
import { PuertaComponent } from './focos/puerta/puerta.component';

const appRoutes:Routes=[
  {path: "", component:HomeComponent},
  {path: 'focos', component:FocosComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FocosComponent,
    NosotrosComponent,
    LoginComponent,
    FocoComponent,
    VentiladorComponent,
    PuertaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
