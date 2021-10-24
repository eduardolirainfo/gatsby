---
title: "Mage registry key already exists"
date: 2015-10-22 14:26:34 Z
tags: ["Magento"]
categories: Mag
background: "#f68d2e"
image: "/static/images/"
description: "Vamos corrigir um erro comum após a migração da loja Magento de servidor ou diretório"
author: "Eduardo Lira"
---

A mensagem **Mage registry key "\_resource_helper/core" already exists** pode ser exibida como um erro em seu acesso após desenvolver sua loja Magento localmente e enviá-la para o servidor de hospedagem, por exemplo.

O problema pode ser resolvido realizando os seguintes passos:

Remover os temporários de cache e sessões:

```bash
rm -rf var/cache/* var/session/*
```

E, em seguida, fazer uma correção de permissões de arquivos:

```bash
find . -type f -exec chmod 644 {} \;
```

```bash
find . -type d -exec chmod 755 {} \;
```

```bash
chmod o+w var var/.htaccess app/etc
```

```bash
chmod 550 mage
```

```bash
chmod -R o+w media
```

Não tive muito trabalho por ter feito via SSH com os comandos acima. Se você é muito leigo ou se sua hospedagem não disponibiliza este tipo de conexão, boa sorte com a limpeza manual via ftp ou gerenciador de arquivos em seu painel da hospedagem.

Os diretórios para limpeza de informações temporárias são os diretórios \*cache ( neste caminho da instalação Magento -> /var/cache )** e **session ( neste caminho da instalação Magento -> var/session)\*\*.

Ainda sobre este erro, também pode ocorrer em atualizações de versão da plataforma.

Outra dica, caso o problema persista, é verificar as configurações no arquivo local.xml que possui informações de conexão. Talves seja necessário atualizar algumas informações para o novo servidor, caso você já não tenha feito..

Vlw!
