import rotaApp from "./moduloRotas.js"

//função da classe é verificar o status e direcionar para a rota
class ControleRotasApp{
  constructor(status, idRota, tela, linkUrl){
    this.status=status;
    this.idRota=idRota;
    this.tela=tela;
    this.linkUrl=linkUrl;
  }
  validaRota(status, idRota){
    if(status==="true") {
      return (rotaApp.find((rotaApp) => rotaApp.idRota === idRota).linkUrl)
    } else {
      return (rotaApp.find((rotaApp) => rotaApp.idRota === idRota).linkUrl)
      //Apesar de terem o mesmo retorno, direcionam a rotas diferentes, pois no primeiro caso o status=true e no segundo caso status=false
    }
  }
}

const controleRotasApp = new ControleRotasApp()
export default controleRotasApp