// Definindo o número secreto explicitamente no código
const numeroSecreto = 42;
let tentativasRestantes = 5;

// Mapeando os elementos do HTML
const inputPalpite = document.getElementById('palpite');
const btnEnviar = document.getElementById('btn-enviar');
const txtTentativas = document.getElementById('tentativas-restantes');
const txtMensagem = document.getElementById('mensagem');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Função principal disparada ao clicar no botão ou dar Enter
function verificarPalpite() {
    const palpite = parseInt(inputPalpite.value);

    // Validação básica para garantir que um número foi digitado
    if (isNaN(palpite)) {
        txtMensagem.textContent = "Por favor, digite um número válido!";
        txtMensagem.className = "mensagem erro";
        return;
    }

    tentativasRestantes--;
    txtTentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    // Condicionais de verificação (Igual, Maior ou Menor)
    if (palpite === numeroSecreto) {
        txtMensagem.textContent = "Parabéns";
        txtMensagem.className = "mensagem sucesso";
        finalizarJogo();
    } else if (tentativasRestantes === 0) {
        txtMensagem.textContent = `Você perdeu! O número correto era ${numeroSecreto}.`;
        txtMensagem.className = "mensagem erro";
        finalizarJogo();
    } else if (palpite > numeroSecreto) {
        txtMensagem.textContent = "O número secreto é menor que o seu palpite.";
        txtMensagem.className = "mensagem dica";
    } else {
        txtMensagem.textContent = "O número secreto é maior que o seu palpite.";
        txtMensagem.className = "mensagem dica";
    }

    // Limpa o campo para o próximo palpite
    inputPalpite.value = '';
    inputPalpite.focus();
}

function finalizarJogo() {
    inputPalpite.disabled = true;
    btnEnviar.disabled = true;
    btnReiniciar.style.display = 'block'; // Mostra botão de recomeçar
}

// Ouvintes de eventos (Cliques e teclas)
btnEnviar.addEventListener('click', verificarPalpite);

inputPalpite.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verificarPalpite();
    }
});

// Recarrega a página se o usuário quiser jogar de novo
btnReiniciar.addEventListener('click', () => {
    window.location.reload();
});

