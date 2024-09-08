//Esta es la primera interfaz
interface tipoVehiculo {
    tipo: string;
    marca: string;
    modelo: string;
    cilindraje: number;
    numPuertas: number;
    arrancarVehiculo(): void;
    cEspeciales: caracteristicasEspeciales[];
}

interface caracteristicasEspeciales{
    velocidad : number;
    suspension : boolean;
    agregarSuspension(): void

}

interface testArray{

    modelos : number [];
    caracteristicasArray : Array<string[]>; 
}

const miVehiculo : tipoVehiculo = {
    tipo: "Camioneta",
    marca: "Ford",
    modelo: "2024",
    cilindraje: 2000,
    numPuertas: 6,
    cEspeciales: [],
    arrancarVehiculo (){
        console.log('El vehiculo arranco con un motor de', this.cilindraje, 'cc');
    },
    
}

const miSegundoVehiculo : caracteristicasEspeciales = {
    velocidad: 60,
    suspension: false,
    agregarSuspension (){
        if (this.suspension){
            console.log("Tu vehiculo tiene suspension");
        } else {
            console.log("Tu vehiculo no tiene suspension");
        }
    },
};

const miTercerVehiculo : testArray = {
    modelos: [2000,2005, 2014, 2020,2024],
    caracteristicasArray: [
        ["Azul", "Verde"],
        ["Rin 15", "Rin 17"],
        ["2 puertas", "4 puertas"],
    ]
}

const miOtroVehiculo : tipoVehiculo = {
    tipo: "Camion",
    marca: "Kenworth",
    modelo: "2014",
    cilindraje: 8000,
    numPuertas: 2,
    arrancarVehiculo (){
        console.log('El vehiculo arranco con un motor de', this.cilindraje, 'cc');
    },
    cEspeciales: []
}

console.log(miVehiculo)
miVehiculo.arrancarVehiculo();
miSegundoVehiculo.agregarSuspension();
console.log(miTercerVehiculo);
console.log(miOtroVehiculo);
console.log({miTercerVehiculo});
console.log(miTercerVehiculo.caracteristicasArray[0][0]);
console.log(miTercerVehiculo.caracteristicasArray[2][1]);
let index = 0;
console.log("Resultados con index = 0:");
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]);
});

index = 1;
console.log("Resultados con index = 1:");
miTercerVehiculo.caracteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]);
}); //Elresultado en cosola fue imprimir los datos del array primero para la columna definida con el index 0, depues mostro los de la 
    //la columna denominada con index = 1

