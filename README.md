# serverless-municipios-por-estado

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
* AWS

A vantagem de se utilizar o AWS Lambda para essa finalidade é pelo cacheamento no Cloudfront automático :tada: e por ser um serviço mais barato do que hospedar um servidor 24/7 apenas para essa finalidade.
