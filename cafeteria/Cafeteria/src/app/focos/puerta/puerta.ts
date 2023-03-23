export class Puerta{
    numPuerta: number;
    tipo: string;
    color: string;
    status: string;


    constructor(numPuerta: number, tipo: string, color: string, status: string){
        this.numPuerta=numPuerta;
        this.tipo=tipo;
        this.color=color;
        this.status=status;
    }
}