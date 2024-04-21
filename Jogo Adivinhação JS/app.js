alert("Boas vindas ao game do número secreto");
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute 
let numeroTentativas = 1;


while (chute != numeroSecreto){
    chute = prompt("Escolha um número de 1 a " + numeroMaximo);
    if (chute == numeroSecreto) {
        break;
    } else {
         if (chute > numeroSecreto){
        alert("O número secreto é menor que " + chute);
    } else {
        alert("O número secreto é maior que " + chute);
        }
        numeroTentativas++;
    } 
}

let palavraTentativa = numeroTentativas > 1 ? "tentativas" : "tentativa";
alert("Muito bem, você descobriu o número secreto " + (numeroSecreto) + " com " + numeroTentativas +  palavraTentativa);

//if (numeroTentativas > 1) {
//    alert("Muito bem, você descobriu o número secreto " + (numeroSecreto) + " com " + numeroTentativas + " tentativas." );
//} else {
//    alert("Muito bem, você descobriu o número secreto " + (numeroSecreto) + " com " + numeroTentativas + " tentativa." );
//}
