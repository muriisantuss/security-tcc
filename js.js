const menuDiv = document.getElementById("menu-mobile");
const btn = document.getElementById("btn-menu");
const radio = document.getElementById("manual-btn");
let cont = 1;
let intervalId; // Armazena o ID do intervalo para que possamos limpar posteriormente

document.getElementById("radio1").checked = true;

// Função para reiniciar a contagem e atualizar a variável cont
function reiniciarContagem(numero) {
  clearInterval(intervalId); // Limpa o intervalo existente
  cont = numero;
  iniciarIntervalo(); // Inicia o intervalo novamente
}

// Função para iniciar o intervalo
function iniciarIntervalo() {
  intervalId = setInterval(() => {
    proximaImg();
  }, 5000);
}

// Função para avançar para a próxima imagem
function proximaImg() {
  cont++;

  if (cont > 4) {
    cont = 1;
  }
  document.getElementById("radio" + cont).checked = true;
}

// Adiciona eventos de clique aos botões de rádio
for (let i = 1; i <= 4; i++) {
  const radioBtn = document.getElementById("radio" + i);
  radioBtn.addEventListener("click", () => reiniciarContagem(i));
}

function animar() {
  menuDiv.classList.toggle("abrir");
  btn.classList.toggle("ativar");
}

// Inicia o intervalo quando o script é carregado
iniciarIntervalo();
