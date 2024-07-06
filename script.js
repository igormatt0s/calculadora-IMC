// Função para converter centímetros em metros
function converteCmParaM(altura) {
    if(altura > 3) {
        altura /= 100;
        return altura;
    } else {
        return altura;
    }
}

// Função para calculaar o IMC
function calculaIMC(peso, altura) {
    const alturaMetros = converteCmParaM(altura);

    const imc = peso / (alturaMetros * alturaMetros)

    // Condição para enviar a Classificação e o IMC calculado
    if(imc < 18.5) {
        return ["Abaixo do peso", imc.toFixed(2)];
    } else if(imc >= 18.5 && imc < 24.9) {
        return ["Peso normal", imc.toFixed(2)];
    } else if(imc >= 24.9 && imc < 29.9) {
        return ["Sobrepeso", imc.toFixed(2)];
    } else {
        return ["Obesidade", imc.toFixed(2)];
    }
}

function limpa_formulario() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}

window.onload = function() {
    document.getElementById("calcular").addEventListener("click", function() {
        // Configuração inicial
        document.getElementById("imc-result").textContent = "";
        document.getElementById("classification-result").textContent = "";
        document.getElementById("input-incorret").textContent = "";

        document.getElementById("firstCla").style.backgroundColor = "white";
        document.getElementById("first").style.backgroundColor = "white";
        document.getElementById("firstWei").style.backgroundColor = "white";
        document.getElementById("secondCla").style.backgroundColor = "white";
        document.getElementById("second").style.backgroundColor = "white";
        document.getElementById("secondWei").style.backgroundColor = "white";
        document.getElementById("thirdCla").style.backgroundColor = "white";
        document.getElementById("third").style.backgroundColor = "white";
        document.getElementById("thirdWei").style.backgroundColor = "white";
        document.getElementById("fourthCla").style.backgroundColor = "white";
        document.getElementById("fourth").style.backgroundColor = "white";
        document.getElementById("fourthWei").style.backgroundColor = "white";

        peso = parseFloat(document.getElementById("peso").value);
        altura = parseFloat(document.getElementById("altura").value);

        if(!isNaN(peso) && !isNaN(altura)) {
            var imcCalculado = calculaIMC(peso, altura);

            // Impressão dos resultados no HTML
            document.getElementById("imc-result").innerHTML = `Seu IMC é <b>${imcCalculado[1]} kg/m<sup>2</sup></b>.`;
            document.getElementById("classification-result").innerHTML = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado como ${imcCalculado[0].toLowerCase()} para a sua altura.`;
            document.getElementById("result").style.display = "block";

            // Interação com a tabela
            if(imcCalculado[0] === "Abaixo do peso") {
                document.getElementById("firstCla").style.backgroundColor = "lightgreen";
                document.getElementById("first").style.backgroundColor = "lightgreen";
                document.getElementById("firstWei").style.backgroundColor = "lightgreen";
            } else if(imcCalculado[0] === "Peso normal") {
                document.getElementById("secondCla").style.backgroundColor = "lightgreen";
                document.getElementById("second").style.backgroundColor = "lightgreen";
                document.getElementById("secondWei").style.backgroundColor = "lightgreen";
            } else if(imcCalculado[0] === "Sobrepeso") {
                document.getElementById("thirdCla").style.backgroundColor = "lightgreen";
                document.getElementById("third").style.backgroundColor = "lightgreen";
                document.getElementById("thirdWei").style.backgroundColor = "lightgreen";
            } else {
                document.getElementById("fourthCla").style.backgroundColor = "lightgreen";
                document.getElementById("fourth").style.backgroundColor = "lightgreen";
                document.getElementById("fourthWei").style.backgroundColor = "lightgreen";
            }

            limpa_formulario();
        } else {
            limpa_formulario();
            document.getElementById("input-incorret").textContent = "Preencha os campos corretamente.";
            document.getElementById("input-incorret").style.color = "red";
            document.getElementById("result").style.display = "none";
        }
        
    })
}

// Teste da Função
var imcCalculado = calculaIMC(70, 160);
console.log(`Seu IMC é: ${imcCalculado[1]} e a sua Classificação é: ${imcCalculado[0]}`);
console.log();
imcCalculado = calculaIMC(50, 1.80);
console.log(`Seu IMC é: ${imcCalculado[1]} e a sua Classificação é: ${imcCalculado[0]}`);
console.log();
imcCalculado = calculaIMC(100, 170);
console.log(`Seu IMC é: ${imcCalculado[1]} e a sua Classificação é: ${imcCalculado[0]}`);
console.log();
imcCalculado = calculaIMC(60, 1.75);
console.log(`Seu IMC é: ${imcCalculado[1]} e a sua Classificação é: ${imcCalculado[0]}`);
console.log();