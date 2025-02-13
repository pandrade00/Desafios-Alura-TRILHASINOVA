function calculoIMC(peso, altura){
    return peso / Math.pow (altura, 2);
}
let resultado = calculoIMC(98, 1.75);
console.log(resultado);