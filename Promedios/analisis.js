// Helpers ->no sonparte de la logica de negocios pero se necesitan para calculos (tambien llamados utils)
function esPar(numero) {
    return (numero % 2 ===0);
}

function calcularMediaArit(lista){
    
    const sumaLista1 = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado +nuevoElemento;
    });
    const promedioLista1 = sumaLista1/ lista.length;
    return promedioLista1;
}
// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaArit([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
// Mediana General
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA-salaryB;
    }
);
// Mediana top 10%
// splice permite separar una fraccion del contenido de un array desde un ponto a otro, valiendoce de posiciones


const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salarioColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salarioColTop10);


const medianaGeneralCol = medianaSalarios(salariosColSorted);
console.log(
    medianaGeneralCol,
    medianaTop10Col
    );