---
title: Technical Error Unable To Load Form
date: 2015-10-22 14:04:27 Z
tags: ["Prestashop"]
image: "/static/images/"
description: "Como corrigir este erro que ocorre ao tentar criar um novo usuário na loja Prestashop"
categories: dev
author:
  twitter: "dudulira"
  name: "Eduardo Lira"
---

É realmente assustador estar realizando testes, e de repente se deparar com a mensagem de erro **_"Technical Error Unable To Load Form"_** ao tentar criar uma nova conta na loja Prestashop.
Obviamente, o erro impede o cadastro de novos clientes, o que os impede de comprar produtos na loja.
Sem conhecimento deste problema a tempo, podemos perder muitas vendas.

Então, se você é o administrador de uma loja Prestashop, tente criar uma nova conta.

O problema é que o módulo de autenticação não redireciona corretamente para onde deveria, devido a uma falha no Ajax. A solução é modificar um arquivo de modelo. Relaxa, que será fácil realizar os próximos passos.

Conecte-se via FTP no servidor da loja e navegue até a pasta do tema que utiliza na Prestashop. Por exemplo, se temos o tema padrão, devemos seguir o caminho **_/themes/default_**. Uma vez neste caminho, vamos abrir um editor de texto (note que , por vezes, esta extensão de arquivo está associada com PhotoShop ) o arquivo authentication.tpl. Então, configure para abrir com um editor de textos em seu computador.

No arquivo altere a linha com o seguinte conteúdo:

url: baseUri,

Este é o código Javascript. Nós adicionamos mais um pedaço de texto para fazer as coisas funcionarem:

url: baseUri+'index.php?controller=authentication',

Se existe, não remova a vírgula no fim da linha. Deixe da mesma forma.

Com isso, nossa Prestashop deve permitir o registro de novos usuários e, portanto, novas compras.

Para mais informações, consulte o fórum oficial Prestashop. Claro, que você também pode deixar um comentário nesta página.

Vlw!
