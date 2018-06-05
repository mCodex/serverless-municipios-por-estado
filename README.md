# serverless-municipios-por-estado

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

## Introdução

Desenvolvi este projeto para me auxiliar no desenvolvimento de aplicativos / sites que necessitam de uma API que possua 2 endpoints:

* Para listar todos os estados do Brasil
* Para buscar todas as cidades de um estado

Dessa forma, acredito que este projeto possa auxiliar mais desenvolvedores também.

### Motivação

Visualizando alguns projetos que estavam em andamento percebi que vários deles haviam importado essas informações em seu próprio banco de dados. Então, teoricamente, se houvesse 3 projetos... Também haveria 3 réplicas das mesmas tables /collections de estado.

### API do IBGE

O IBGE possui uma API gratuita e aberta para realização dessas consultas, porém percebi que às vezes ela sofre por instabilidades... Além de retornar várias informações que, muitas vezes, não são necessárias para os meus projetos e, dessa forma, há uma demora um pouco maior e desnecessária para buscar os dados que necessito.

## O Projeto

Este projeto utiliza a seguinte stack:

* Serverless Framework
* NodeJS
* Mongoose
* MongoDB
* Webpack
* AWS

A vantagem de se utilizar o AWS Lambda para essa finalidade é pelo cacheamento no Cloudfront automático :tada: e por ser um serviço mais barato do que hospedar um servidor 24/7 apenas para essa finalidade.

### Instalação

Primeiramente, clone o projeto e depois, dentro da pasta do projeto, rode:

```bash
yarn
```
ou

```bash
npm i
```

Dentro da pasta `./db` tem um arquivo .json que deverá ser importado em seu ambiente de desenvolvimento Mongo. O mais importante é que a collection precisa se chamar `municipios`, para que não haja nenhum passo extra na instalação.

Agora, com as dependências instaladas e o banco de dados importado, vá até o arquivo `./src/lib/connection.js` e altere a string de conexão para apontar para o endereço da sua database.

Por fim, rode:

```bash
yarn start
```

### Endpoints

#### Listagem de estados

`GET http://localhost:3000/getStates`

Retorna um objeto contendo o status do request e um array com todos os estados.

```javascript
{
    "status": 200,
    "estados": [
        {
            "_id": "5b15ce92c9d915b7bdd2cb60",
            "uf": "12",
            "sigla_uf": "AC",
            "nome_uf": "Acre"
        },
        {
            "_id": "5b15ce92c9d915b7bdd2cb5f",
            "uf": "11",
            "sigla_uf": "RO",
            "nome_uf": "Rondônia"
        },
        ...
    ]
}
```

`GET http://localhost:3000/getCities/ID_DO_ESTADO`

Retorna um objecto contendo o status e um array com as cidades daquele estado.

Exemplo - Rondônia:

`GET http://localhost:3000/getCities/5b15ce92c9d915b7bdd2cb5f`

```javascript
{
    "status": 200,
    "cidades": {
        "_id": "5b15ce92c9d915b7bdd2cb5f",
        "cidades": [
            {
                "codigo_ibge": 1100015,
                "nome_municipio": "Alta Floresta D'Oeste"
            },
            {
                "codigo_ibge": 1100379,
                "nome_municipio": "Alto Alegre dos Parecis"
            },
            {
                "codigo_ibge": 1100403,
                "nome_municipio": "Alto Paraíso"
            },
            ...
        ]
    }
}
```
