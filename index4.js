// index4.js
const {knex} = require("./config")
  
  const  idjogador = 17
  //const numeroJogador = 8

  knex("jogador").del().where({idjogador}).then(res => {
    console.log(res)
    process.exit(0)
  })