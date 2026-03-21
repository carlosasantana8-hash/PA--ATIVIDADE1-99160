// Função para calcular a média das três notas inseridas pelo usuário e determinar o status do aluno
function calcularMedia() {
    // Obtém o valor da primeira nota do campo de entrada HTML com id "nota1" e converte para número decimal usando parseFloat
    let nota1 = parseFloat(document.getElementById("nota1").value);
    // Obtém o valor da segunda nota do campo de entrada HTML com id "nota2" e converte para número decimal usando parseFloat
    let nota2 = parseFloat(document.getElementById("nota2").value);
    // Obtém o valor da terceira nota do campo de entrada HTML com id "nota3" e converte para número decimal usando parseFloat
    let nota3 = parseFloat(document.getElementById("nota3").value);

    // Obtém o elemento HTML com id "resultado" onde será exibido o resultado da média e status
    let resultado = document.getElementById("resultado");

    // Início da validação das notas inseridas
    // Verifica se algum valor não é um número válido (usando isNaN) ou está fora do intervalo 0-10
    if (
        isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||  // Verifica se nota1, nota2 ou nota3 não são números válidos
        nota1 < 0 || nota1 > 10 ||  // Verifica se nota1 está abaixo de 0 ou acima de 10
        nota2 < 0 || nota2 > 10 ||  // Verifica se nota2 está abaixo de 0 ou acima de 10
        nota3 < 0 || nota3 > 10     // Verifica se nota3 está abaixo de 0 ou acima de 10
    ) {
        // Se a validação falhar, define o conteúdo HTML do elemento resultado como uma mensagem de erro
        resultado.innerHTML = "⚠️ Digite apenas notas entre 0 e 10!";
        // Remove qualquer classe CSS aplicada ao elemento resultado, resetando o estilo
        resultado.className = "";
        // Encerra a execução da função para evitar cálculos incorretos
        return;
    }

    // Calcula a média aritmética das três notas dividindo a soma por 3
    let media = (nota1 + nota2 + nota3) / 3;

    // Inicializa a variável mensagem com a média formatada com duas casas decimais, seguida de uma quebra de linha HTML
    let mensagem = `Média: ${media.toFixed(2)}<br>`;

    // Início da determinação do status do aluno baseado na média calculada
    if (media >= 7) {
        // Se a média for maior ou igual a 7, adiciona à mensagem que o aluno está aprovado
        mensagem += "Aluno APROVADO ✅";
        // Aplica a classe CSS "aprovado" ao elemento resultado para estilização
        resultado.className = "aprovado";
    } else if (media >= 5) {
        // Se a média for maior ou igual a 5 (mas menor que 7), adiciona à mensagem que o aluno está em recuperação
        mensagem += "Aluno em RECUPERAÇÃO ⚠️";
        // Aplica a classe CSS "recuperacao" ao elemento resultado para estilização
        resultado.className = "recuperacao";
    } else {
        // Se a média for menor que 5, adiciona à mensagem que o aluno está reprovado
        mensagem += "Aluno REPROVADO ❌";
        // Aplica a classe CSS "reprovado" ao elemento resultado para estilização
        resultado.className = "reprovado";
    }

    // Define o conteúdo HTML do elemento resultado como a mensagem completa (média + status)
    resultado.innerHTML = mensagem;
}
