// index.js 
const contatos = require('./contatos')
let idcontato, nome, telefone, entrada

if (process.argv.length < 3) {
  return console.log('Argumentos em execesso!')
}

if (process.argv[2] == 'select') {
  contatos.select()
  return
}

entrada = process.argv[3].split(',')

if (process.argv[2] == 'insert') {
  console.log('insert')
  nome     = entrada[0]
  telefone = entrada[1]
  contatos.insert(nome,telefone)
  return
}

if (process.argv[2] == 'update') {
  console.log('update')
  idcontato = entrada[0]
  nome      = entrada[1]
  telefone  = entrada[2]
  contatos.update(idcontato, nome, telefone)

  return
}
if (process.argv[2] == 'delete') {
  console.log('delete')
  idcontato = entrada[0]
  contatos.del(idcontato)
  return
}
else{ 
 console.log('parâmetro inválido!')

}
  // SELECT * FROM jogador;
 /* knex("jogador")
  .select()
  .where('numeroJogador', 11)
  .then(ret => {
    console.log(ret)
    process.exit(0) // finalizar execução do script
  }) */