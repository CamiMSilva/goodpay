import userLogin from "./moduloDados.js"

class ControlerUserLogin {
  constructor(status) {
    this.status = status
  }
  checkLogin() {
    this.status = true
  }
  loginInfo(user, senha){
    var infoCheck = userLogin.find((userLogin) => userLogin.username === user)
    if (!infoCheck) {
      alert("Usuário não existe!")
    } else {
    console.log(infoCheck)
    if (infoCheck.senha === senha) {
      this.checkLogin()
      alert(`Você está ${this.status}`)
      this.checkLogin()
    } else { 
        alert("Não logou!")
      }
    }
  }
}

//instanciamento
const controlerUserLogin = new ControlerUserLogin()

//Rota
export default controlerUserLogin