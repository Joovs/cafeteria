import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CargarScriptsService } from "./../cargar-scripts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

 
  
constructor ( private _CargaScripts:CargarScriptsService){
  _CargaScripts.Carga(["ap/app"]);
}
  

  img1:string = "assets/img/C1.png"
  img2:string = "assets/img/C2.jpg"
  img3:string = "assets/img/C3.png"
  img4:string = "assets/img/C4.png"
  img5:string = "assets/img/C5.png"
  img6:string = "assets/img/C6.png"
  img7:string = "assets/img/C7.png"
  img8:string = "assets/img/C8.png"
}
