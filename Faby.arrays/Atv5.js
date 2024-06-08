var entrada = require("readline-sync");
var idades = [];
var media = 0;
var menor = 0;
var maior = 1000;

for(var i = 0; i< 5; i++){
    idades[i] = parseInt(entarda.question('Digite uma idade: '));
    if (idades[i] > menor){
        menor = idade[i]
    }else if(idades[i] < maior){
        maior = idade[i]
    }
}
for(var i = 0; i <5; i++){
    media = parseInt(media + idades[i]);

}
console.log(media/5,menor,maior)
console.log(`A media das idades digitadas é: ${media/5}. A maior idade digitada é:`)