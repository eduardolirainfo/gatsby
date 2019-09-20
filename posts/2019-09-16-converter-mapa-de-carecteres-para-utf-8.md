---
title: Converter mapa de carecteres para utf-8
description: >-
  Vamos executar uma query que converte o mapa de caracteres da base de dados
  MySQL para UTF-8
date: '2015-10-23 11:14:39'
thumbnail: /assets/img/mountains.jpg
category: misc
background: '#7AAB13'
---
Para converter o mapa de caracteres de um banco de dados MySQL para UTF-8 siga os passos abaixo.

Na aba sql do seu administrador phpmyadmin execute os seguintes comandos sql ( Em ambiente local ou não, utilize um administrador de banco de dados com opção de execução de consultas ( queries ) ao banco. Se você possui conhecimentos avançados, fique à vontarde também).

Para converter somente banco de dados para UTF8.

`ALTER DATABASE nomedobanco CHARACTER SET utf8 COLLATE utf8_general_ci;`

Para converter cada tabela para UTF8.

`ALTER TABLE nomedatabela1 CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;`

`ALTER TABLE nomedatabela2 CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;`

Esse processo de conversão pode ser útil para você corrigir erros ou adaptar seu banco com um novo servidor após migração de conteúdo.



Vlw!