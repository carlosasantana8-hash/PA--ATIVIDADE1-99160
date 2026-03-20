document.addEventListener('DOMContentLoaded', () => {

    const STATUS_CONFIG = {
        SUCCESS: { label: 'sucesso', icon: 'fa-circle-check' },
        WARNING: { label: 'alerta', icon: 'fa-triangle-exclamation' },
        ERROR: { label: 'erro', icon: 'fa-circle-xmark' }
    };

    const getVotingStatus = (age) => {
        const idade = Number(age);

        if (age === "" || isNaN(idade) || idade < 0) {
            return {
                msg: "Por favor, insira uma idade válida.",
                type: STATUS_CONFIG.WARNING
            };
        }

        if (idade < 16) {
            return {
                msg: "Não pode votar. (Abaixo de 16 anos)",
                type: STATUS_CONFIG.ERROR
            };
        }

        if ((idade >= 16 && idade < 18) || idade > 65) {
            return {
                msg: "O seu voto é opcional.",
                type: STATUS_CONFIG.WARNING
            };
        }

        return {
            msg: "O seu voto é obrigatório.",
            type: STATUS_CONFIG.SUCCESS
        };
    };

    const form = document.getElementById('votoForm');
    const input = document.getElementById('idade');
    const display = document.getElementById('resultado');

    // 🔥 TESTE DE DEBUG (IMPORTANTÍSSIMO)
    console.log(form, input, display);

    if (!form || !input || !display) {
        alert("Erro: HTML não conectado corretamente ao JS.");
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const idade = input.value;
        const result = getVotingStatus(idade);

        display.innerHTML = `
            <div class="${result.type.label}">
                <i class="fa-solid ${result.type.icon}"></i>
                ${result.msg}
            </div>
        `;
    });

});
