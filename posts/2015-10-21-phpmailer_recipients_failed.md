---
title: PHPMailer Recipients Failed
date: 2015-10-21 16:12:26 Z
tags: ["Joomla"]
image: "/static/images/"
description: Corrigindo erro de envio de e-mails em versões antigas do Joomla
categories: dev
author:
  twitter: "dudulira"
  name: "Eduardo Lira"
---

Para correção do erro PHPMAILER_RECIPIENTS_FAILED na tentativa de envio em seu formulário Joomla, no arquivo deste caminho em seu servidor de hospedagem -> components/com_contact/controller.php, na linha 162

alterar:

```php
$mail->setSender( array( $email, $name ) );
```

para:

```php
$mail->setSender( array( $MailFrom, $name ) );
$mail->addReplyTo( array( $email, $name ) );
```

Este erro é comum em versões antigas do Joomla ( 1.5 ) devido a falha no cabeçalho para autenticação e envio. Vejam que neste caso ao setar o addReplyTo solucionou-se o proplema.

Em caso de dificuldades ou se desconhece sobre como editar um arquivo de sua hospedagem ( ainda é muito leigo ), você pode alterar a configuração padrão de envio em sua administração Joomla através do menu Site > Configuração Global > Aba Servidor > Configurações de E-Mail. Basta alterar o campo "Método \*" sem aspas, de SMTP para PHP Mail e salvar. Dependendo, pode ser necessário alguma configuração extra para este tipo de envio. Caso não funcione de primeira, contacte seu provedor de hospedagem solicitando mais informações.

Neste link existem mais informações sobre como funciona o cabeçalho de e-mails: http://kb.mediatemple.net/questions/892/Understanding+an+email+header

Outras dicas e soluções para versões posteriores sobre a mensagem de erro estão acessíveis através desta discussão no fórum oficial Joomla.

http://forum.joomla.org/viewtopic.php?t=272547
