// Função para calcular o total da compra de maçãs baseado na quantidade inserida pelo usuário
function calcular() {
    // Obtém referências aos elementos HTML: input da quantidade e display do resultado
    const inputQuantidade = document.getElementById('quantidade');
    const displayResultado = document.getElementById('resultado');
    
    // Obtém o valor do input, converte para inteiro usando parseInt
    const quantidade = parseInt(inputQuantidade.value);

    // Validação de entrada: verifica se a quantidade não é um número ou é menor ou igual a zero
    if (isNaN(quantidade) || quantidade <= 0) {
        // Define o conteúdo HTML do resultado como uma mensagem de erro com classe CSS
        displayResultado.innerHTML = '<span class="error-text">Por favor, insira uma quantidade válida.</span>';
        // Encerra a função para evitar cálculos incorretos
        return;
    }

    // Regra de negócio: define o preço unitário baseado na quantidade
    // Se quantidade menor que 12, preço é R$ 1,30; senão, R$ 1,00
    const precoUnitario = (quantidade < 12) ? 1.30 : 1.00;
    // Calcula o valor total multiplicando quantidade pelo preço unitário
    const valorTotal = quantidade * precoUnitario;

    // Formata o valor total como moeda brasileira (BRL) usando toLocaleString
    const valorFormatado = valorTotal.toLocaleString('pt-BR', {
        style: 'currency', // Estilo de moeda
        currency: 'BRL' // Moeda brasileira
    });

    // Define o conteúdo HTML do resultado com o total formatado, classe de sucesso e preço unitário
    displayResultado.innerHTML = `
        <div>
            Total da compra: <span class="success-text">${valorFormatado}</span><br>
            <small style="color: #70757a; font-size: 0.75rem;">
                (Preço unitário: R$ ${precoUnitario.toFixed(2).replace('.', ',')})
            </small>
        </div>
    `;
}