//1
let diaDaSemana = prompt ('Informe o dia da semana:');
if(diaDaSemana == 'Sabado'){
    console.log('Bom fim de semana!');
    alert('Bom fim de semana!');
}
else if(diaDaSemana == 'domingo' ){
    console.log('Boa semana!');
    alert('Boa semana!');
}
//2
let numero = prompt('Digite um número');
if(numero > 0){
    alert('Número é positivo!');
}
if(numero < 0){
    alert('Número negativo');
}
//3
let pontuacao = prompt('Pontuação:');
if(pontuacao >= 100){
    alert('Parabens, você venceu!');
}
else if(pontuacao < 100){
 alert('Tente novamente para ganhar.');   
}
//4
let saldoDaConta = 0.25;
alert(`Saldo da conta: ${saldoDaConta}`);
//5
let nome = 'Peedroaandrade'
prompt('Digite o nome de usuário:')
alert(`Boas vindas ${nome}`);