const customExpress = require('./config/customExpress')

const app = customExpress()

// aqui vamos subir o app no servidor, colocando a porta 
// qdo algo bater na porta 3000 executa a função seguinte...
app.listen(3000, () => console.log('servidor rodando na porta 3000'))
