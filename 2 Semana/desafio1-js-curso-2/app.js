let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function cliqueDoBotao(){
    console.log('O botão foi clicado');
}

function cliqueDoAlert(){
    alert('Eu amo JS');
}

function cliqueDoPrompt(){
   let cidade = prompt('Uma cidade do Brasil?');
   alert(`Estive em ${cidade} e lembrei de você`);
}



function cliqueDoSoma(){
    let n1 = parseInt(prompt('Número 1:'));
    let n2 = parseInt(prompt('Número 2:'));

    let resultado = n1 + n2;
    alert(`Soma de ${n1} e ${n2} é igual a ${resultado}`);
}