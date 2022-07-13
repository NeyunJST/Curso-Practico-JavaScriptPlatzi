
function calcularPrecioConDescuento(precio, desc){
    const porcentajePrecioDescuento= 100 - desc;
    const total = (precio*porcentajePrecioDescuento)/100;
    return total;
}

function onClickTotal(){
    const precio = document.getElementById("InputPrice").value;
    const descuento = document.getElementById("InputDiscount").value;
    const total =calcularPrecioConDescuento(precio, descuento);
    
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText="El precio con descuento es: $"+total;
}