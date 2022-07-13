
function calcularPrecioConDescuento(){
    
    
}

function calcularPrecioConDescuento(precio, desc){
    const porcentajePrecioDescuento= 100 - desc;
    const total = (precio*porcentajePrecioDescuento)/100;
    return total;
}

function onClickTotal(){
    // array de cupones
    const cupones = [
        "oro","plata","bronce"
    ];
    // solicitud de cupon
    const precio = document.getElementById("InputPrice").value;
    const cupon = document.getElementById("Inputcupon").value;

    let desc;

    switch (cupon) {
        case cupones[0]:
            desc = 50;
            break;
        case cupones[1]:
            desc = 30;
            break;
        case cupones[2]:
            desc = 20;
            break;
    
        
    }
    // resultado
    const total =calcularPrecioConDescuento(precio, desc);
    
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText="El precio con descuento es: $"+total;
}