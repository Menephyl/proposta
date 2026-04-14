function hojeBR() {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

// remove tudo que não for número
function onlyDigits(str) {
    return (str || "").replace(/\D/g, "");
}

// validação simples (não é validação oficial de CNPJ, mas evita vazio)
function validateCNPJMin(cnpj) {
    const dig = onlyDigits(cnpj);
    return dig.length === 14;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("aceitarBtn");
    const cnpjInput = document.getElementById("cnpjInput");
    const dominioCheck = document.getElementById("dominioCheck");

    if (!btn) return;

    btn.addEventListener("click", () => {
        const cnpj = (cnpjInput?.value || "").trim();

        // ela deve preencher
        if (!validateCNPJMin(cnpj)) {
            alert("Por favor, preencha um CNPJ válido (14 dígitos).");
            cnpjInput?.focus();
            return;
        }

        const comDominio = !!dominioCheck?.checked;
        const valor = comDominio ? "R$ 840,00" : "R$ 800,00";

        const payload = {
            clienteNome: "Priscila",              // fixo conforme seu caso
            clienteCnpj: cnpj,                    // preenchido por ela
            valor: valor,                         // depende do checkbox
            comDominio: comDominio,
            dataAceite: hojeBR(),
            foro: "Três Corações/MG",
            produto: "Landing Page com Agente de IA (no site)",
            whatsappCloser: "5535992144176"
        };

        localStorage.setItem("prime_payload_priscila", JSON.stringify(payload));

        // redireciona para o contrato
        window.location.href = "./contrato.html";
    });
});