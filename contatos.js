//contatos.js
const {knex} = require('./config')

//***  OPERAÇÕES C.R.U.D
exports.select = () => {knex('contato').select().then(ret => {console.log(ret)})}

exports.insert = (nome, telefone) => {
    knex(`contato`).insert({nome,telefone}).then(ret => {
        console.log(`Foi inserido: nome ${nome}, telefone: ${telefone}`)
    })
}

exports.update = (idcontato, nome, telefone) => {
    knex(`contato`).update({nome,telefone}).where({idcontato}).then( ret => {
        console.log(`Foi Alterado: nome ${nome}, telefone ${telefone}`)
    })
}

exports.del = (idcontato) => {knex('contato').where({idcontato}).del().then(ret => {
    console.log(`Foi deletado: id ${idcontato}`)
})
}