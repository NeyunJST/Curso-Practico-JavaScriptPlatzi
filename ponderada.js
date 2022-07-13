/*La media ponderada (MP) es una medida de centralización. 
Consiste en otorgar a cada observación del conjunto de datos 
(X1,X2,…,XN) unos pesos (p1,p2,…,pN) según la importancia de cada 
elemento.*/
/*5.2,8.2,7.4,5.7 - 3,1,2,4*/

function CalcularMediaPonderada(elementos, pesos) {
    let resulEle= 0.0;
    let resulPeso= 0;
    for (let i = 0; i < elementos.length; i++) {
        resulEle = resulEle+(elementos[i]*pesos[i]);
        resulPeso = resulPeso + pesos[i];
    }
    mediaPonderada= resulEle/resulPeso;
    return parseFloat(mediaPonderada.toFixed(2));
}
