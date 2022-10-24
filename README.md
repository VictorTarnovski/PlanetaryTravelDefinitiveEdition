# Planetary-Travel Basics

Projeto Planetary Travels - Using SWAPI

Lógica Operacional:
Ao subir o servidor e acessar as rotas, o TravelRouter direciona cada request a devida ação.
Cada rota que depende da comunição com o banco de dados tem seu próprio controller e service posteriormente.
Rotas de consulta na SWAPI tem sua pasta separada para realizar o GET geral das informações.

===============================================================

Rotas da Aplicação:

GET:
/travels : Lista todas as viagens criadas no banco
/travels/id : Faz a query no banco pelo ObjectID do MongoDB
/people : Consulta todos os personagens existentes na API do StarWars
/starships : Consulta todas as naves existentes na API do StarWars
/planets : Consulta todos os planetas existentes na API do StarWars
/species : Consulta todas as espécies existentes na API do StarWars

POST:
/travels/create : Cria viagem nova no banco de dados

PUT:
travels/id : Atualiza registro de viagem com base no seu ObjectID

DELETE:
travels/id : Encontra o ObjectID passado no endpoint e deleta o registro no banco

===============================================================

Para rodar a aplição é necessário ter instalado pelo NPM os seguintes modulos/libs:
(Use o npm install para fazer a instalação)

EXPRESS
@TYPES/EXPRESS
TYPESCRIPT

MONGODB
MONGOOSE
@TYPES/MONGOOSE

Assim como ter o MongoDB Compass instalado
Link para instalação: https://www.mongodb.com/try/download/community

Link para Collection no Postman:
https://www.getpostman.com/collections/a6570efde798c12a40e0

Exemplo de Post:

{
"Starship": "Millennium Falcon",
"Pilot": "Chewbacca",
"Copilot": "R2-D2",
"OrigPlanet": "Alderaan",
"DestPlanet": "Tatooine"
}
