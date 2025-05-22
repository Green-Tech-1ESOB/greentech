// Váriaveis com os caminhos
let botao = document.querySelector("#enviar");
let nomeInput = document.querySelector("#nome");
let emailInput = document.querySelector("#email");
let tituloInput = document.querySelector("#titulo");
let mensagemInput = document.querySelector("#mensagem");
let erroNome = document.querySelector("#erro_nome");
let erroEmail = document.querySelector("#erro_email");

nomeInput.addEventListener('input',function(){
    const palavras = nomeInput.value.trim().split(/\s+/); // trim - tira espaço antes e depois / split - palavras em array

    if (palavras.length < 2){
        erroNome.textContent = "Digite seu nome completo!!!";
    }else {
        erroNome.textContent = '';
    }

});

//Ao ser digitado o email enivar para a Function(validarEmail)
emailInput.addEventListener('input', function () {

    if (!validarEmail(emailInput.value)) {
        erroEmail.textContent = "Digite um e-mail válido!";
    } else {
        erroEmail.textContent = "";
    }
    
});

function validarEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Verifica se o email é valido

}

//Função que é ativada a partir do click do botão
botao.addEventListener('click',function(){

    //Pega o valor dentro do caminho
    let nome = nomeInput.value;
    let email = emailInput.value;
    let titulo = tituloInput.value;
    let mensagem = mensagemInput.value;

    const palavras = nome.trim().split(/\s+/);

    if (nome === "" || email === "" || titulo === "" || mensagem === ""){

        alert("Preencha todas as informações!!");  

    }else if(palavras.length < 2) {

        alert("Preencha seu nome completo!!");  

    }else if (!validarEmail(email)) { //Puxa a resposta com a validação

        alert("Digite um e-mail válido!");

    }else{
         alert("Enviado com sucesso!!");
        
            //Limpa os campos
            nomeInput.value = ""
            emailInput.value = ""
            tituloInput.value = ""
            mensagemInput.value = ""
        }
})
