// index2.js --> INSERT
const {knex} = require('./config')
  
  const jogador = {
      numeroJogador: 11,
      nomeJogador: 'Pascal'
  }
  knex('jogador').insert(jogador).select().then(j => {
    console.log(j)
    process.exit(0)
  })