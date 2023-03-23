import { Component, OnInit } from '@angular/core';
import { Puerta } from './puerta'

@Component({
  selector: 'app-puerta',
  templateUrl: './puerta.component.html',
  styleUrls: ['./puerta.component.css']
})
export class PuertaComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Puertas:Puerta[]=[
    {"numPuerta": 1, "tipo": "Madera", "color": "Café", "status": "Abierta"},
    {"numPuerta": 2, "tipo": "Metal", "color": "Negro", "status": "Cerrada"},
    {"numPuerta": 3, "tipo": "Vidrio", "color": "Sin color", "status": "Cerrada"},
    {"numPuerta": 4, "tipo": "Madera", "color": "Café oscuro", "status": "Cerrada"}
  ];

  PuertasAbiertas = this.Puertas.filter(f => f.status === "Abierta");

  get productCount(){
    return this.PuertasAbiertas.length
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
