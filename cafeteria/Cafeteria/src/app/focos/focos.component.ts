import { Component } from '@angular/core';

@Component({
  selector: 'app-focos',
  templateUrl: './focos.component.html',
  styleUrls: ['./focos.component.css']
})
export class FocosComponent {




  foco = false;
  vent = false;
  puerta=false;

  cambiarEstadoFoco() {
    this.foco = !this.foco
  }

  cambiarEstadoV() {
    this.vent = !this.vent
  }

  cambiarEstadoP() {
    this.puerta = !this.puerta
  }

}
