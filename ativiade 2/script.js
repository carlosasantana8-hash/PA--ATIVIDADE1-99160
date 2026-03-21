// Função para calcular a média das três notas inseridas pelo usuário e determinar o status do aluno
function calcularMedia() {
    // Obtém o valor da primeira nota do campo de entrada HTML com id "nota1" e converte para número usando Number
    let n1 = Number(document.getElementById("nota1").value);
    // Obtém o valor da segunda nota do campo de entrada HTML com id "nota2" e converte para número usando Number
    let n2 = Number(document.getElementById("nota2").value);
    // Obtém o valor da terceira nota do campo de entrada HTML com id "nota3" e converte para número usando Number
    let n3 = Number(document.getElementById("nota3").value);

    // Verifica se algum dos valores não é um número válido usando isNaN
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        // Se houver valores inválidos, exibe um alerta para o usuário
        alert("Preencha todas as notas corretamente!");
        // Encerra a função para evitar cálculos incorretos
        return;
    }

    // Calcula a média aritmética das três notas dividindo a soma por 3
    let media = (n1 + n2 + n3) / 3;
    // Determina o status usando operador ternário: aprovado se média >= 7, senão reprovado
    let status = media >= 7 ? "Aprovado ✅" : "Reprovado ❌";

    // Obtém o elemento HTML com id "resultado" onde será exibido o resultado
    let resultado = document.getElementById("resultado");

    // Define o conteúdo HTML do elemento resultado com a média e status formatados
    resultado.innerHTML = `
        <strong>Média:</strong> ${media.toFixed(2)} <br>
        <strong>Status:</strong> ${status}
    `;

    // Adiciona a classe "resultado" e uma classe condicional ("aprovado" ou "reprovado") ao elemento resultado
    resultado.className = "resultado " + (media >= 7 ? "aprovado" : "reprovado");
    // Define o estilo display como "block" para tornar o elemento visível
    resultado.style.display = "block";
}
