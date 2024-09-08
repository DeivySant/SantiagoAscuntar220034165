var miVehiculo = {
    tipo: "Camioneta",
    marca: "Ford",
    modelo: "2024",
    cilindraje: 2000,
    numPuertas: 6,
    cEspeciales: [],
    arrancarVehiculo: function () {
        console.log('El vehiculo arranco con un motor de', this.cilindraje, 'cc');
    },
};
var miSegundoVehiculo = {
    velocidad: 60,
    suspension: false,
    agregarSuspension: function () {
        if (this.suspension) {
            console.log("Tu vehiculo tiene suspension");
        }
        else {
            console.log("Tu vehiculo no tiene suspension");
        }
    },
};
var miTercerVehiculo = {
    modelos: [2000, 2005, 2014, 2020, 2024],
    caracteristicasArray: [
        ["Azul", "Verde"],
        ["Rin 15", "Rin 17"],
        ["2 puertas", "4 puertas"],
    ]
};
var miOtroVehiculo = {
    tipo: "Camion",
    marca: "Kenworth",
    modelo: "2014",
    cilindraje: 8000,
    numPuertas: 2,
    arrancarVehiculo: function () {
        console.log('El vehiculo arranco con un motor de', this.cilindraje, 'cc');
    },
    cEspeciales: []
};
console.log(miVehiculo);
miVehiculo.arrancarVehiculo();
miSegundoVehiculo.agregarSuspension();
console.log(miTercerVehiculo);
console.log(miOtroVehiculo);
console.log({ miTercerVehiculo: miTercerVehiculo });
console.log(miTercerVehiculo.caracteristicasArray[0][0]);
console.log(miTercerVehiculo.caracteristicasArray[2][1]);
var index = 0;
console.log("Resultados con index = 0:");
miTercerVehiculo.caracteristicasArray.forEach(function (caracteristica) {
    console.log(caracteristica[index]);
});
index = 1;
console.log("Resultados con index = 1:");
miTercerVehiculo.caracteristicasArray.forEach(function (caracteristica) {
    console.log(caracteristica[index]);
});
