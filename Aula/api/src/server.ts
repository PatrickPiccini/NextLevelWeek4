import express, { request, response } from 'express'

const app = express()

/*
GET => Busca
POST => Slavar
PUT => Alterar
DELETE => Deletar
PATCH => Alteração específica
*/

// https://localhost:5000/users

app.get("/", (request, response) =>{
    return response.json({message: "hello world - NLS04"});
});

// 1 parametro => Rota(Recurso API)
app.post("/" , (request, response) => {
    return response.json({menssagem:"Os dados foram salvos com sucesso!"});
});


app.listen(5000, () => console.log('Server is running!'))