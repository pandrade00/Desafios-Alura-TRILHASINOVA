alert('Boas Vindas ao nosso site');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os campos');
let mensagemDeErro = alert('Erro! Preencha todos os campos');
let nome2 = prompt("Nome do usuario:");
let idade2 = prompt('Digite sua idade:');
 if(idade2 >= 18){
     console.log('Pode tirar a habilitação');
    alert('Pode tirar a habilitação');
 }
 else if(idade2 < 18){
    console.log('Não é permetido tirar habilitação');
    alert('Não é permetido tirar habilitação'); 
 }