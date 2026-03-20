document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formAposentadoria');
    const codigoInput = document.getElementById('codigo');
    const nascimentoInput = document.getElementById('nascimento');
    const tempoInput = document.getElementById('tempo');
    const resultado = document.getElementById('resultado');

    const getStatus = (anoNasc, tempo) => {
        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - anoNasc;

        if (isNaN(anoNasc) || isNaN(tempo) || anoNasc <= 0 || tempo < 0) {
            return { msg: 'Preencha ano de nascimento e tempo de trabalho válidos.', class: 'error' };
        }

        if (anoNasc > anoAtual) {
            return { msg: 'Ano de nascimento não pode ser maior que o ano atual.', class: 'error' };
        }

        if (idade >= 65 || tempo >= 30) {
            return { msg: `Colaborador com ${idade} anos e ${tempo} anos de trabalho: apto à aposentadoria.`, class: 'success' };
        }

        const faltamAnos = Math.max(0, 65 - idade);
        const faltamTempo = Math.max(0, 30 - tempo);
        return { msg: `Colaborador com ${idade} anos e ${tempo} anos de trabalho: não apto. Faltam ${faltamAnos} anos de idade e ${faltamTempo} anos de trabalho.`, class: 'error' };
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const codigo = codigoInput.value.trim();
        const anoNasc = Number(nascimentoInput.value);
        const tempo = Number(tempoInput.value);

        if (!codigo) {
            resultado.textContent = 'Informe a matrícula do empregado.';
            resultado.className = 'error';
            return;
        }

        const status = getStatus(anoNasc, tempo);
        resultado.textContent = status.msg;
        resultado.className = status.class;
    });
});