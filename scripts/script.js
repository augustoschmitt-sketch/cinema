const idadeInput = document.getElementById("idade");

const notaSelect = document.getElementById("nota");

const resultado = document.getElementById("resultado");

const btnAdicionar = document.getElementById("btnAdicionar");

const btnLimpar = document.getElementById("btnLimpar");


let qtdPessoas = 0;

let idadeGeral = 0;

let qtdEspecifico = [0, 0, 0, 0, 0];

let idadeEspecifico = [0, 0, 0, 0, 0];


btnAdicionar.addEventListener("click", adicionar);

btnLimpar.addEventListener("click", limparCampos);


function adicionar(){

    let idade = Number(idadeInput.value);

    let nota = Number(notaSelect.value);

    if(idadeInput.value == ""){
        alert("Digite algo no campo idade!");
        return;
    } else if(idade < 0){
        alert("Pesquisa encerrada!");

        qtdPessoas = 0;
        idadeGeral = 0;
        
        for(let i = 0; i < 5; i++){
            qtdEspecifico[i] = 0;
            idadeEspecifico[i] = 0;
        }

        return;
    } else if(nota==0){
        alert("Escolha uma nota!");
        return;
    }


    qtdPessoas++;

    idadeGeral += idade;

    qtdEspecifico[nota - 1]++;

    idadeEspecifico[nota - 1] += idade;


    let mediaIdadeGeral = idadeGeral / qtdPessoas;

    let porcentagem = [];

    for(let i=0; i < 5; i++){
        porcentagem[i] = (qtdEspecifico[i] / qtdPessoas) * 100;
    }

    let mediaIdadeEspecifico = [];

    for(let i=0; i < 5; i++){
        if(qtdEspecifico[i]>0){
            mediaIdadeEspecifico[i] = idadeEspecifico[i]/ qtdEspecifico[i];
        }else{
            mediaIdadeEspecifico[i] = 0;
        }
    }

    resultado.innerText =
        "RESULTADO DA PESQUISA\n\n"+
        "Total de participantes: "+ qtdPessoas +" pessoas\n"+
        "Idade média geral: "+ mediaIdadeGeral.toFixed(1) +" anos\n\n"+
        "Ótimo -> "+porcentagem[0].toFixed(2)+
        "% das respostas;\n Média de idade de quem marcou 'Ótimo': "+mediaIdadeEspecifico[0].toFixed(1)+" anos;\n\n"+
        "Bom -> "+porcentagem[1].toFixed(2)+
        "% das respostas;\n Média de idade de quem marcou 'Bom': "+mediaIdadeEspecifico[1].toFixed(1) +" anos;\n\n"+
        "Regular -> "+porcentagem[2].toFixed(2)+
        "% das respostas;\n Média de idade de quem marcou 'Regular': "+mediaIdadeEspecifico[2].toFixed(1)+" anos;\n\n"+
        "Ruim -> "+porcentagem[3].toFixed(2)+
        "% das respostas;\n Média de idade de quem marcou 'Ruim': "+mediaIdadeEspecifico[3].toFixed(1) +" anos;\n\n"+
        "Péssimo -> "+porcentagem[4].toFixed(2)+
        "% das respostas;\n Média de idade de quem marcou 'Péssimo': "+mediaIdadeEspecifico[4].toFixed(1) +" anos";

    alert("Dados adicionados com sucesso!");

    limparCampos();
}


function limparCampos(){
    idadeInput.value = "";
    notaSelect.value = "0";
}