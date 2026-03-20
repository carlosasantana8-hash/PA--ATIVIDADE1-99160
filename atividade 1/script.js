function calcular() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Digite valores válidos!");
        return;
    }

    let soma = n1 + n2;
    let media = soma / 2;
    let produto = n1 * n2;
    let maior = Math.max(n1, n2);
    let menor = Math.min(n1, n2);

    let resultadoHTML = `
        <div class="linha">📊 Soma: ${soma}</div>
        <div class="linha">📈 Média: ${media}</div>
        <div class="linha">✖ Produto: ${produto}</div>
        <div class="linha">🔝 Maior número: ${maior}</div>
        <div class="linha">🔻 Menor número: ${menor}</div>
    `;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = resultadoHTML;
    resultado.style.display = "block";
}
