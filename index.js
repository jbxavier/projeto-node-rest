// aqui vamos chamar o express para criar aplicativo/servidor
// estamos importando o express
const express = require('express')

const app = express()

// aqui vamos subir o app no servidor, colocando a porta 
// qdo algo bater na porta 3000 executa a função seguinte...
app.listen(3000, () => console.log('servidor rodando na porta 3000'))

app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos!'))

app.get('/produtos', (req, res) => res.send('Escolha seus produtos!'))