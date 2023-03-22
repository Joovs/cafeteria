export class Focos{
    numFoco: number;
    tipo: string;
    watts: number;
    status: string;
    habitacion: string;


    constructor(numFoco: number, tipo: string, watts: number, status: string, habitacion: string){
        this.numFoco=numFoco;
        this.tipo=tipo;
        this.watts=watts;
        this.status=status;
        this.habitacion=habitacion;
    }
}