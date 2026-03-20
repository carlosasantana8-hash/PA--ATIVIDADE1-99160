function calcular() {
    const inputQuantidade = document.getElementById('quantidade');
    const displayResultado = document.getElementById('resultado');
    
    // Obtendo o valor e convertendo
    const quantidade = parseInt(inputQuantidade.value);

    // Validação de entrada
    if (isNaN(quantidade) || quantidade <= 0) {
        displayResultado.innerHTML = '<span class="error-text">Por favor, insira uma quantidade válida.</span>';
        return;
    }

    // Regra de negócio:
    // < 12 = R$ 1,30
    // >= 12 = R$ 1,00
    const precoUnitario = (quantidade < 12) ? 1.30 : 1.00;
    const valorTotal = quantidade * precoUnitario;

    // Formatação de moeda BRL
    const valorFormatado = valorTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Exibição do resultado com classe de sucesso
    displayResultado.innerHTML = `
        <div>
            Total da compra: <span class="success-text">${valorFormatado}</span><br>
            <small style="color: #70757a; font-size: 0.75rem;">
                (Preço unitário: R$ ${precoUnitario.toFixed(2).replace('.', ',')})
            </small>
        </div>
    `;
}