// 1
function calculoIMC(peso, altura){
    return peso / Math.pow (altura, 2);
}
let resultado = calculoIMC(98, 1.75);
console.log(resultado);

//✅ Use === quando quiser garantir que os valores e tipos sejam exatamente os mesmos.
//⚠️ Use == apenas se quiser permitir conversões automáticas (mas isso pode gerar bugs).

// 2
function fatorialDeNumero(numero = 1){
    if(numero === 1 || numero === 0) return 1;
    return numero * fatorialDeNumero(numero - 1);
    }
let fatorial = fatorialDeNumero(4);
console.log(fatorial);

// 3
function converterDolar(valordollar){
    return (valordollar * 4.80). toFixed(2);
}

let valorReais = converterDolar(550.90);
console.log(valorReais);

// 4
function calculoAreaPerimetro(altura, largura){
    let area = altura * largura;
    let perimetro = 2*altura + 2*largura;
    return [area, perimetro]
}

console.log(calculoAreaPerimetro(12,15));

// 5
let raio = 6;
let pi = 3.14;

function caculoAreaPerimetroSala(raio){
    let area = Math.pow(raio, 2) * pi;
    let perimetro = 2*pi*raio;

    console.log(`Area do circulo ${area}`);
    console.log(`Perimetro do circulo ${perimetro}`);
}
caculoAreaPerimetroSala(raio);

// 6
let numero = 7;
function mostraTabuada(numero){
  for(let i = 1; i <= 10; i++){
       let resultado = numero * i;
      console.log(`${numero} * ${i} = ${resultado}`);
  }
}
mostraTabuada(numero);

// usando while na resolução da 6
let valor = 7
function tabuada(valor){
    let i = 1
    while(i <= 10){
        let r = valor * i;
        console.log(`${valor} * ${i} = ${r}`);
        i++;
    }
}
tabuada(valor);