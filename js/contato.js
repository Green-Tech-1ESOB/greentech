// Váriaveis com os caminhos
let botao = document.querySelector("#enviar");
let nomeInput = document.querySelector("#nome");
let emailInput = document.querySelector("#email");
let tituloInput = document.querySelector("#titulo");
let mensagemInput = document.querySelector("#mensagem");
let erro = document.querySelector("#erro_nome");

nomeInput.addEventListener('input',function(){
    const palavras = nomeInput.value.trim().split(/\s+/); // trim - tira espaço antes e depois / split - palavras em array

    if (palavras.length < 2){
        erro.textContent = "Digite seu nome completo!!!";
    }else {
        erro.textContent = '';
    }

});

//Função que é ativada a partir do click do botão
botao.addEventListener('click',function(){

    //Pega o valor dentro do caminho
    let nome = nomeInput.value;
    let email = emailInput.value;
    let titulo = tituloInput.value;
    let mensagem = mensagemInput.value;

    const palavras = nomeInput.value.trim().split(/\s+/);
    console.log(palavras)

    if (nome === "" || email === "" || titulo === "" || mensagem === ""){

        alert("Preencha todas as informações!!");  

    }else if(palavras.length < 2) {

        alert("Preencha seu nome completo!!");  

    }else{
         alert("Enviado com sucesso!!");
        
            //Limpa os campos
            nomeInput.value = ""
            emailInput.value = ""
            tituloInput.value = ""
            mensagemInput.value = ""
        }
})
