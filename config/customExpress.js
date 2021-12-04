// -> Nesse arquivo estão todas as configurações necessárias

// aqui vamos chamar o express para criar aplicativo/servidor
// estamos importando o express
const express = require('express')
// agrupa app atendimentos para ser reconhecido 
const consign = require('consign')

module.exports = () => {
    const app = express()
    // usar consign: colocar pasta de controllers para ser visto pelo
    // app (estamos passando app para ser visto pelos arquivos de 
    // controllers)
    consign()
        .include('controllers')
        .into(app)

    return app
}

