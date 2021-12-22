import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotasApp from "./moduloControleRotas.js";

//Trazendo elementos do Bootstrap para uso da main.js
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

//Trazendo os botões da DOM em HTML
const entrarUsuario = document.getElementById("btnEntrar")

//Adicionando evento ao botão "Entrar", trazendo os valores usuário e senha do HTML pela DOM, devolvendo o alerta da interface.js pela DOM
entrarUsuario.addEventListener("click", (evento) => {
  let user = document.getElementById("usuario").value,
  senha = document.getElementById("senha").value
  let alertModal = controlerUserLogin.loginInfo(user, senha)
  
  document.getElementById("titleModal").innerHTML= alertModal.title
  document.getElementById("bodyModal").innerHTML= alertModal.bodyModal
  document.getElementById("btnModalClose").innerHTML= alertModal.b1
  document.getElementById("btnModalSave").innerHTML= alertModal.b2

  myModal.show()
  setTimeout(carregarPagina, 2500)
  function carregarPagina() {
    window.location.hrel=controleRotasApp.validaRota(localStorage.status, alertModal.idModal)
  }
})

//Adicionando evento ao botão "Novo Usuário" com encaminhamento de rota. A rota é necessária para que o usuário não tennha acesso direto ao url sem fazer o login
const novoUsuario = document.getElementById("btnNovoUsuario")
novoUsuario.addEventListener("click", (event) => {
  window.location.href=controleRotasApp.validaRota("false", "usuarioNaoExiste1")
})