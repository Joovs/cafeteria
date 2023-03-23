import { Component, OnInit } from '@angular/core';
import { Ventilador } from './ventilador'

@Component({
  selector: 'app-ventilador',
  templateUrl: './ventilador.component.html',
  styleUrls: ['./ventilador.component.css']
})
export class VentiladorComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Vents:Ventilador[]=[
    {"numV": 1, "color": "Negro", "watts": 120, "area": "Comedor", "status": "Encendido"},
    {"numV": 2, "color": "Azul", "watts": 100, "area": "Cocina", "status": "Encendido"},
    {"numV": 3, "color": "Negro", "watts": 90, "area": "Almacén", "status": "Encendido"},
    {"numV": 4, "color": "Gris", "watts": 85, "area": "Terraza", "status": "Apagado"}
  ];

  ventsActivos = this.Vents.filter(f => f.status === "Encendido");

  get productCount(){
    return this.ventsActivos.length
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
