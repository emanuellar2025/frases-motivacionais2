const frases = [
    "Acredite em você!",
    "Você é mais forte do que imagina.",
    "Nunca desista dos seus sonhos.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "A jornada de mil milhas começa com um simples passo."
];

function novaFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").textContent = frases[indice];
}

// Executa quando a página estiver carregada
window.addEventListener('DOMContentLoaded', () => {
    novaFrase();
    document.getElementById("botaoFrase").addEventListener("click", novaFrase);
});
