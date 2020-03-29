const express = require('express');
const cors= require('cors');
const app = express();
const routes = require('./routes');

app.use(cors({
    //origin: 'htttp://meuapp.com' exemplo dominio
}));
app.use(express.json());
app.use(routes);

/*Metodo GET Buscar uma informação
 *metodod POST Criar uma informação no Backend
 *PUT: Alterar uma informação no Backend
 *DELETE: Deletar uma informação no backend
 */
/*Tipos de Paremetros
* Query: são parametros enviados na rota aps o simbolo de interrogação ? (filtros, paginação)
* Route Params: parametrs utilizados para identificar recursos
* Requestbady
*/



app.listen(3333);