// Função para calcular operações matemáticas com dois números inseridos pelo usuário
function calcular() {
    // Obtém o valor do primeiro número do campo de entrada HTML com id "num1" e converte para número usando Number
    let n1 = Number(document.getElementById("num1").value);
    // Obtém o valor do segundo número do campo de entrada HTML com id "num2" e converte para número usando Number
    let n2 = Number(document.getElementById("num2").value);

    // Verifica se algum dos valores não é um número válido usando isNaN
    if (isNaN(n1) || isNaN(n2)) {
        // Se houver valores inválidos, exibe um alerta para o usuário
        alert("Digite valores válidos!");
        // Encerra a função para evitar cálculos incorretos
        return;
    }

    // Calcula a soma dos dois números
    let soma = n1 + n2;
    // Calcula a média aritmética dos dois números dividindo a soma por 2
    let media = soma / 2;
    // Calcula o produto dos dois números multiplicando-os
    let produto = n1 * n2;
    // Determina o maior número entre n1 e n2 usando Math.max
    let maior = Math.max(n1, n2);
    // Determina o menor número entre n1 e n2 usando Math.min
    let menor = Math.min(n1, n2);

    // Cria uma string HTML com os resultados formatados, cada um em uma div com classe "linha" e emoji
    let resultadoHTML = `
        <div class="linha">📊 Soma: ${soma}</div>
        <div class="linha">📈 Média: ${media}</div>
        <div class="linha">✖ Produto: ${produto}</div>
        <div class="linha">🔝 Maior número: ${maior}</div>
        <div class="linha">🔻 Menor número: ${menor}</div>
    `;

    // Obtém o elemento HTML com id "resultado" onde será exibido o resultado
    let resultado = document.getElementById("resultado");
    // Define o conteúdo HTML do elemento resultado como a string criada
    resultado.innerHTML = resultadoHTML;
    // Define o estilo display como "block" para tornar o elemento visível
    resultado.style.display = "block";
}
