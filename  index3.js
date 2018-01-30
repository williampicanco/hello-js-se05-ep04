// index3.js --> UPDATE
const {knex} = require('./config')

const jogador = {
  nomeJogador: 'Cristovão',
  idjogador:9
}
  
const idjogador = 8
const numeroJogador = 10
const nomeJogador = 'Tiririca'

  knex("jogador").update({jogador}).where('idjogador', jogador.idjogador).then(j => {
    console.log(j)
    //process.exit(0)
  })