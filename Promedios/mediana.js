function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

function calcularMediaArit(lista){
    
    const sumaLista1 = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado +nuevoElemento;
    });
    const promedioLista1 = sumaLista1/ lista.length;
    return promedioLista1;
}
function comparation(a,b) {
    return a-b;
}

function calcularMediana(lista) {
    const lista1 = lista.sort(comparation);
    const mitadLista1 =parseInt(lista1.length/2);
    let mediana;
    if (esPar(lista1.length)) {
        const element1 = lista1[mitadLista1-1];
        const element2 = lista1[mitadLista1];
        const promedioELemento1y2 = calcularMediaArit([element1, element2]);
        mediana = promedioELemento1y2;
        
    }else{
        mediana = lista1[mitadLista1];
    }
    return mediana;
}
