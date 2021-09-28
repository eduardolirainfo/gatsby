---
title: Autenticacao FTP direta no WordPress
description: "Vamos aprender uma dica simples sobre autenticação no servidor de hospedagem utilizando o Wordpress"
date: 2012-06-09 11:14:39
categories: dev
background: "#637a91"
tags:
  - tesoux
  - teste2
---

Para instalar temas ou um simples plugin no Wordpress, talvez você se depare com aquela bendita tela onde são solicitados host, usuário e senha FTP. Muitos usuários leigos entram em contato com a empresa de hospedagem para pedir o endereço de Host FTP, que geralmente é ftp.nomedodominio.com.br . É uma medida de segurança válida, por questões de permissão e usuário dos diretórios.

Não é seguro deixar estes dados gravados no navegador e é muito chato ter toda vez que digitar em ambiente de desenvolvimento.

> Uma técnica não muito segura, é definir estas informações no arquivo **wp-config.php**, mas é claro, se alguém conseguir ver os dados do seu **wp-config.php**, você perdeu.

Insira as linhas abaixo dentro do código PHP deste arquivo (**wp-config.php**):

```php
define('FTP_HOST', 'ftp.seudominio.com.br');

define('FTP_USER', 'usuarioftp');

define('FTP_PASS', 'senhaftp');
```

Após inserido o código acima, chega de toda vez que for instalar um plugin, ser solicitado tais dados de acesso FTP.

O método citado acima ajuda, e possivelmente não terá problemas com permissões ou usuários dos diretórios.

Existe uma outra técnica que pode funcionar e não expõe seus dados de acesso. Mas, talvez sejam necessárias permissões nos diretórios dentro da **wp-content**, para que possa fazer as atualizações e instalações sem problemas.

Insira somente a última linha de código abaixo no arquivo **wp-config.php**. Preferencialmente abaixo da que chama o **wp-settings.php**.

```php
/** Sets up WordPress vars and included files. */

require_once(ABSPATH . 'wp-settings.php');

define('FS_METHOD','direct');
```

\
Lembrando, que não me responsabilizo por eventuais problemas de segurança. Se seu **wp-config.php** não está protegido, não siga esta dica. ;)

Até a próxima!
