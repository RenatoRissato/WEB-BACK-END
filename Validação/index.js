const formEL = document.getElementById("form");
const nomeEL = document.getElementById("nome");
const cpfEL = document.getElementById("cpf");
const emailEL = document.getElementById("email");
const emailConfirmEL = document.getElementById("email-valido");
const enderecoEL = document.getElementById("enderecoCompleto");


formEL.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (!nomeEL.value || !cpfEL.value || !emailEL.value || !emailConfirmEL.value || !enderecoEL.value) {
        alert("Preencha todos os campos");
        return;
    }

     // Verifica se CPF está no formato certo
     if(!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpfEL.value)){
        alert("CPF Inválido, digite um CPF no formato 000.000.000-00");
        return;
    }

    // Verifica se os emails conferem
    if (emailEL.value !== emailConfirmEL.value) {
        alert("Os emails não conferem");
        return;
    }
   
    // Exemplo de sucesso
    alert("Cadastro realizado com sucesso!");
});
