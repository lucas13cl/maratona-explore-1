const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector ("#inputPergunta")
const butaoPerguntar = document.querySelector ("#butaoPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Não consigo obter essa informação no momento.",
  "Não posso lhe informar sobre isso.",
]

//clicar em fazer perguntas
function fazerPergunta() {
  if(inputPergunta.value == ""){
    alert("Digite sua Pergunta")
  }else{
    alert("Digite uma pergunta valida")
  }
  

  butaoPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"
 

// gerar um numero aleatorio
 const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

// sumir a resposta depois de 3 segundos
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  butaoPerguntar.removeAttribute("disabled")
}, 3000)
}
