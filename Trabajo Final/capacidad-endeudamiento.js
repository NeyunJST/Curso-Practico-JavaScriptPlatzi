function capacidadCredito(salary, services, foods, others) {
    let neto = salary - (services + foods + others);
    const loancapacity = neto - (salary / 3);
    return loancapacity;
};

function onClickResultado(){
    const salary = document.getElementById("salary").value;
    const services = document.getElementById("services").value;
    const foods = document.getElementById("foods").value;
    const others = document.getElementById("others").value;

    const result = parseInt(capacidadCredito(salary,services,foods,others));
    const resultp = document.getElementById("resultp");
    resultp.innerText = "Puedes invertir: s/"+ result;
}


