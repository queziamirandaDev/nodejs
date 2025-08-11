const nome = "Ana";
console.log(nome);

//Executação de tempo limite 
setTimeout(() => {
    console.log("Executando no tempo limite");
}, 3000);

//Intervalo definido
const int = setInterval (() => {
    console.log('Intervalo');
}, 1000);