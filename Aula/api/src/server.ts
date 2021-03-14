import 'reflect-metadata';
import express, { request, response } from 'express';
import "./database";
import { router } from './routes';

/*
GET => Busca
POST => Slavar
PUT => Alterar
DELETE => Deletar
PATCH => Alteração específica
*/


const app = express();

app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server is Running!"));
