// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Obtém referências aos elementos HTML: formulário, inputs e display de resultado
    const form = document.getElementById('formAposentadoria');
    const codigoInput = document.getElementById('codigo');
    const nascimentoInput = document.getElementById('nascimento');
    const tempoInput = document.getElementById('tempo');
    const resultado = document.getElementById('resultado');

    // Função que determina o status de aposentadoria baseado no ano de nascimento e tempo de trabalho
    const getStatus = (anoNasc, tempo) => {
        // Obtém o ano atual
        const anoAtual = new Date().getFullYear();
        // Calcula a idade subtraindo o ano de nascimento do ano atual
        const idade = anoAtual - anoNasc;

        // Verifica se os valores são inválidos (não números, negativos ou ano de nascimento zero)
        if (isNaN(anoNasc) || isNaN(tempo) || anoNasc <= 0 || tempo < 0) {
            // Retorna mensagem de erro para dados inválidos
            return { msg: 'Preencha ano de nascimento e tempo de trabalho válidos.', class: 'error' };
        }

        // Verifica se o ano de nascimento é maior que o ano atual
        if (anoNasc > anoAtual) {
            // Retorna mensagem de erro para ano futuro
            return { msg: 'Ano de nascimento não pode ser maior que o ano atual.', class: 'error' };
        }

        // Verifica se a idade é maior ou igual a 65 ou tempo de trabalho maior ou igual a 30
        if (idade >= 65 || tempo >= 30) {
            // Retorna mensagem de sucesso para aposentadoria apta
            return { msg: `Colaborador com ${idade} anos e ${tempo} anos de trabalho: apto à aposentadoria.`, class: 'success' };
        }

        // Calcula quantos anos faltam para idade 65 e tempo 30
        const faltamAnos = Math.max(0, 65 - idade);
        const faltamTempo = Math.max(0, 30 - tempo);
        // Retorna mensagem de erro com detalhes do que falta
        return { msg: `Colaborador com ${idade} anos e ${tempo} anos de trabalho: não apto. Faltam ${faltamAnos} anos de idade e ${faltamTempo} anos de trabalho.`, class: 'error' };
    };

    // Adiciona listener para o evento de submit do formulário
    form.addEventListener('submit', (e) => {
        // Previne o comportamento padrão de recarregar a página
        e.preventDefault();
        // Obtém o valor da matrícula, removendo espaços em branco
        const codigo = codigoInput.value.trim();
        // Converte o ano de nascimento para número
        const anoNasc = Number(nascimentoInput.value);
        // Converte o tempo de trabalho para número
        const tempo = Number(tempoInput.value);

        // Verifica se a matrícula está vazia
        if (!codigo) {
            // Define o texto do resultado como erro de matrícula
            resultado.textContent = 'Informe a matrícula do empregado.';
            // Define a classe CSS como 'error'
            resultado.className = 'error';
            // Encerra a execução
            return;
        }

        // Chama a função para obter o status de aposentadoria
        const status = getStatus(anoNasc, tempo);
        // Define o texto do resultado com a mensagem
        resultado.textContent = status.msg;
        // Define a classe CSS baseada no status
        resultado.className = status.class;
    });
});