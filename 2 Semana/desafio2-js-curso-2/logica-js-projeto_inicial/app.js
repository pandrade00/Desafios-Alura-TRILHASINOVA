//1
function mensagemOLa(){
    console.log('Olá mundo!!');
}
mensagemOLa();

//2
function exibirNome(nome){
    console.log(`Olá ${nome}`);
}
exibirNome('Pedro Andrade');

//3
function dobroNumero(numero){
    return numero * 2;
}
let resutado = dobroNumero(9);
console.log(resutado);

//4
function calcularMedia(n1, n2, n3){
    return n1+n2+n3/3;
}
let media = calcularMedia(5,6,8);
console.log(media); 

//5
function numeroMaior(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}

let maiorNumero = numeroMaior(5,9);
console.log(maiorNumero);

//6 
function mutiplicacaoPeloMesmo(n){
    return n * n;

}
let mutiplicacao = mutiplicacaoPeloMesmo(9);
console.log(mutiplicacao);