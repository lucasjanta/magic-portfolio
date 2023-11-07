const sendButton = document.querySelector(".button-send-email");

function sendForm(){
    //make all the confirmations in the form
    
    const name = document.querySelector(".input-name").value;
    const email = document.querySelector(".input-email").value;
    const message = document.querySelector(".input-message").value;

    if (name == "") {
        alert("Por favor, digite seu nome");
        return;
    }
    if (email == "") {
        alert("Por favor, digite seu email");
        return;
    }
    if (message == "") {
        alert("Por favor, digite sua mensagem");
        return;
    }
    
    alert("Email enviado com sucesso!");

}