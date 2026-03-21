// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Configuração de constantes para os tipos de status, incluindo rótulo e ícone
    const STATUS_CONFIG = {
        SUCCESS: { label: 'sucesso', icon: 'fa-circle-check' }, // Status de sucesso com ícone de check
        WARNING: { label: 'alerta', icon: 'fa-triangle-exclamation' }, // Status de alerta com ícone de exclamação
        ERROR: { label: 'erro', icon: 'fa-circle-xmark' } // Status de erro com ícone de X
    };

    // Função que determina o status de votação baseado na idade
    const getVotingStatus = (age) => {
        // Converte a idade para número
        const idade = Number(age);

        // Verifica se a idade é vazia, não é um número ou negativa
        if (age === "" || isNaN(idade) || idade < 0) {
            // Retorna mensagem de erro para idade inválida
            return {
                msg: "Por favor, insira uma idade válida.",
                type: STATUS_CONFIG.WARNING // Tipo de status: alerta
            };
        }

        // Se idade menor que 16, não pode votar
        if (idade < 16) {
            return {
                msg: "Não pode votar. (Abaixo de 16 anos)",
                type: STATUS_CONFIG.ERROR // Tipo de status: erro
            };
        }

        // Se idade entre 16 e 18 ou maior que 65, voto opcional
        if ((idade >= 16 && idade < 18) || idade > 65) {
            return {
                msg: "O seu voto é opcional.",
                type: STATUS_CONFIG.WARNING // Tipo de status: alerta
            };
        }

        // Caso contrário, voto obrigatório
        return {
            msg: "O seu voto é obrigatório.",
            type: STATUS_CONFIG.SUCCESS // Tipo de status: sucesso
        };
    };

    // Obtém referências aos elementos HTML: formulário, input e display de resultado
    const form = document.getElementById('votoForm');
    const input = document.getElementById('idade');
    const display = document.getElementById('resultado');

    // 🔥 TESTE DE DEBUG (IMPORTANTÍSSIMO): Loga os elementos no console para verificar se foram encontrados
    console.log(form, input, display);

    // Verifica se todos os elementos foram encontrados; se não, alerta erro
    if (!form || !input || !display) {
        alert("Erro: HTML não conectado corretamente ao JS.");
        return; // Encerra a execução
    }

    // Adiciona listener para o evento de submit do formulário
    form.addEventListener('submit', (event) => {
        // Previne o comportamento padrão de recarregar a página
        event.preventDefault();

        // Obtém o valor da idade do input
        const idade = input.value;
        // Chama a função para obter o status de votação
        const result = getVotingStatus(idade);

        // Define o conteúdo HTML do display com o resultado, incluindo ícone e mensagem
        display.innerHTML = `
            <div class="${result.type.label}">
                <i class="fa-solid ${result.type.icon}"></i>
                ${result.msg}
            </div>
        `;
    });

});
