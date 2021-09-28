---
title: "Error: 500 PHP Regular Expression Limit Reached"
date: 2015-05-20 20:11:23 Z
tags: ["Joomla"]
description: "Corrigir Error: 500 PHP Regular Expression Limit Reached"
categories: dev
author:
  twitter: "dudulira"
  name: "Eduardo Lira"
---

Para solução caso você se depare com a mensagem -> **Error: 500 PHP REGULAR EXPRESSION LIMIT REACHED (PCRE.BACKTRACK_LIMIT)** em seu Joomla, basta adicionar as linhas abaixo no arquivo <code>index.php</code> ou no<code>configuration.php</code> da instalação do aplicativo em sua hospedagem.

_Obs.: Insira as linhas de código logo após a abertura da tag php no arquivo._

```php

ini_set('pcre.backtrack_limit',1000000);
ini_set('pcre.recursion_limit',1000000);

```

Caso tenha acesso ao <code>php.ini</code> é melhor ainda, pois basta alterar os valores no arquivo.
Veja mais na documentação -> [http://php.net/manual/pt_BR/pcre.configuration.php](http://php.net/manual/pt_BR/pcre.configuration.php)

No meu funcionou sem problemas.
Em caso de dúvidas, deixe seu comentário.

Vlw! :v:
