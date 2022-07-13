//este es el codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado=5;
console.log("los lados del cuadrado miden: "+ladoCuadrado+"cm");

function perimetroC (lado){
    return lado * 4;
}

//console.log("Perimetro del cuadrado mide: "+perimetroC+"cm");

function areaCuadrado (lado){
    return lado * lado;
}
//console.log("El área del cuadrado mide: "+ areaCuadrado+"cm2");
console.groupEnd();

console.group("Triangulos")


//Codigo del triangulo
// const ladoT1=6;
// const ladoT2=6;
// const baseT=4;
// const alturaT= 5.5;
// console.log("Los lados del triangulo miden: "
// +ladoT1+"cm, "+
// ladoT2+"cm,"
// +baseT+"cm");
// console.log("la altura del triangulo mide: "+ alturaT +"cm");
function perimetroT (lado1, lado2, base){
    return lado1 + lado2 + base;
}

// console.log("Perimetro del triangulo es: "+perimetroT+"cm");
function areaT (base, altura){
    return (base* altura)/2;
}
// console.log("El área del Triangulo mide: "+ areaT+"cm2");
console.groupEnd();


//Cod Círculo
console.group("Círculos");
//Radio
// const radioC= 4;
// console.log("El radio del circulo es: "+radioC+"cm");
//Diámetro
function diametroCirculo (radio){
    return radio * 2;
}
// console.log("El diametro del circulo es: "+diametroC+"cm");
//PI
const PI = Math.PI;
console.log("PI es: "+PI+"cm");
//Circunferencia
function perimetroCir (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es: "+perimetroCir+"cm");
//Area
function areaC (radio){
    return (radio*radio)*PI;
}
// console.log("El area del circulo es: "+areaC+"cm2");

console.groupEnd();

//AQUI INTERACTUAMOS CON EL HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroC(value);
    alert(perimetro); 
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area); 
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    const perimetro =perimetroT(lado1,lado2,base);
    alert(perimetro)
}
function calcularAreaTriangulo(){
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const area = areaT(base, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio").value;
    const perimetro = perimetroCir(radio);
    alert(perimetro)
}
function calcularAreaCirculo(){
    const radio = document.getElementById("radio").value;
    const area = areaC(radio);
    alert(area);
}

// Triangulo ISOCELES

function CalcularAlturaTIsoceles(lado1, lado2, base){
    if (lado1===lado2 && lado1!=base) {
        const altura = Math.sqrt(Math.pow(lado1,2)-((Math.pow(base,2))/4));
        console.log(altura)
    } else {
        return "No es isoceles pendejo"
    }
    
}










