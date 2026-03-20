function calcularMedia() {
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Preencha todas as notas corretamente!");
        return;
    }

    let media = (n1 + n2 + n3) / 3;
    let status = media >= 7 ? "Aprovado ✅" : "Reprovado ❌";

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <strong>Média:</strong> ${media.toFixed(2)} <br>
        <strong>Status:</strong> ${status}
    `;

    resultado.className = "resultado " + (media >= 7 ? "aprovado" : "reprovado");
    resultado.style.display = "block";
}
