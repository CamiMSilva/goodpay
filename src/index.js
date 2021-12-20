import controlerUserLogin from "./moduloInterface.js";

//Elementos de avisos para uso do Bootstrap: modal, toast, alert
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

//Trazendo os botões da DOM em HTML
const entrarUsuario = document.getElementById("btnEntrar")

entrarUsuario.addEventListener("click", (evento) => {
  let nome = document.getElementById("usuario").value,
  senha = document.getElementById("senha").value
  //Testando se os campos não estão vazios
  if (!nome || nome===null || nome==="" || !senha || senha===null || senha==="") {
    alert("Campos vazios! Não há como executar o login.")
    document.getElementById("titleModal").innerHTML = "Campos Vazios"
    document.getElementById("bodyModal").innerHTML = "Não há como executar o login com os campos vazios!"
    document.getElementById("btnModalClose").innerHTML = "Fechar"
    document.getElementById("btnModalSave").innerHTML = "Salvar"
    myModal.show()
  } else {
    controlerUserLogin.loginInfo(nome, senha)
  }
})