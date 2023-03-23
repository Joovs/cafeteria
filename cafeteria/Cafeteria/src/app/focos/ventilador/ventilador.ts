export class Ventilador{
    numV: number;
    color: string;
    watts: number;
    status: string;
    area: string;

    constructor(numV: number, color: string, watts: number, status: string, area: string){
        this.numV=numV;
        this.color=color;
        this.watts=watts;
        this.status=status;
        this.area=area;
    }

}