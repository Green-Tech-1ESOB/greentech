// Váriaveis com os caminhos
let botao = document.querySelector("#enviar");
let nomeInput = document.querySelector("#nome");
let emailInput = document.querySelector("#email");
let tituloInput = document.querySelector("#titulo");
let mensagemInput = document.querySelector("#mensagem");

//Função que é ativada a partir do click do botão
botao.addEventListener('click',function(){

    //Pega o valor dentro do caminho
    let nome = nomeInput.value;
    let email = emailInput.value;
    let titulo = tituloInput.value;
    let mensage = mensagemInput.value;

    if (nome === "" || email === "" || titulo === "" || mensagem === ""){
        alert("Preencha todas as informações!!");
    }else{
        alert("Enviado com sucesso!!");

        //Limpa os campos
        nomeInput.value = ""
        emailInput.value = ""
        tituloInput.value = ""
        mensagemInput.value = ""
    }
})
