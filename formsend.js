const sendButton = document.querySelector(".button-send-email");
const pomba = document.querySelector("#pomba");
const asaBack = document.querySelector("#asa-tras");
const asaFront = document.querySelector("#asa-frente");
const letter = document.querySelector(".card-letter");

function sendForm(){
    //make all the confirmations in the form
    var voo = gsap.timeline();
    voo.to(pomba,{x: -180, y: 80, rotation: 45, duration: 1, ease: "power1.inOut"})
    .to(pomba, {x: -400, y: 0, duration: 0.8, delay: -0.3})
    .to(pomba, {x: -450, y: 0, duration: 0, ease: "power1.inOut", scaleX: -1})
    .to(pomba, {scaleX: -2, scaleY: -2, delay: -0.3})
    .to(pomba, {x: -150, y: 50, duration: 1, delay: -0.1})
    var ltanim = gsap.timeline();
    ltanim.to(letter,{scale: 0.3, duration: 1.5, ease: "power1.inOut"})
    
    const name = document.querySelector(".input-name").value;
    const email = document.querySelector(".input-email").value;
    const message = document.querySelector(".input-message").value;

    /* if (name == "") {
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
    } */
    
    /* alert("Email enviado com sucesso!"); */

}