import { Component, OnInit } from '@angular/core';
import { Focos } from './focos'

@Component({
  selector: 'app-foco',
  templateUrl: './foco.component.html',
  styleUrls: ['./foco.component.css']
})
export class FocoComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Focos:Focos[]=[
    {"numFoco": 1, "tipo": "Ahorrador", "watts": 80, "habitacion": "sala", "status": "Encendido"},
    {"numFoco": 2, "tipo": "Incandescente", "watts": 100, "habitacion": "sala", "status": "Apagado"},
    {"numFoco": 3, "tipo": "Ahorrador", "watts": 90, "habitacion": "sala", "status": "Encendido"},
    {"numFoco": 4, "tipo": "Ahorrador", "watts": 60, "habitacion": "sala", "status": "Apagado"}
  ];

  focosActivos = this.Focos.filter(f => f.status === "Encendido");

  get productCount(){
    return this.focosActivos.length
  }

  get switchValue () {
    if (this.productCount === 0){
      return 'empty';
    }else if (this.productCount === 1){
      return 'one';
    }else{
      return 'many';
    }    
  }

}
