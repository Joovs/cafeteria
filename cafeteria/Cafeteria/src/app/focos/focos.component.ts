import { Component } from '@angular/core';

@Component({
  selector: 'app-focos',
  templateUrl: './focos.component.html',
  styleUrls: ['./focos.component.css']
})
export class FocosComponent {




  foco1 = false;
  foco2 = false;
  foco3 = false;
  foco4 = false;
  vent = false;
  puerta=false;
  puerta2=false;

  cambiarEstadoFoco() {
    this.foco1 = !this.foco1
  }

  cambiarEstadoFoco2() {
    this.foco2 = !this.foco2
  }

  cambiarEstadoFoco3() {
    this.foco3 = !this.foco3
  }
  
  cambiarEstadoFoco4() {
    this.foco4 = !this.foco4
  }


  cambiarEstadoV() {
    this.vent = !this.vent
  }

  cambiarEstadoP() {
    this.puerta = !this.puerta
  }

  cambiarEstadoP2() {
    this.puerta2 = !this.puerta2
  }

}
