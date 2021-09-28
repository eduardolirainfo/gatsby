---
title: "Comandos Básicos Linux - LS"
date: 2017-01-10 11:01:38 Z
published: false
tags: ["Linux"]
categories: DevOps
description: "Comandos básicos no Lnux - ls"
author:
  twitter: "dudulira"
  name: "Eduardo Lira"
---

#ls

Lista conteúdo de diretórios.

Sintaxe:

#ls

Opções:

-l : modo longo. Lista detalhes sobre os objetos, como o dono, o grupo, as

permissões, data de última alteração e tamanho (a unidade padrão é o byte).

-a ou &#8211;all : lista todos os objetos contidos no diretório, inclusive os ocultos.

-i ou –inode : lista o número inode de todos os objetos (índice que o sistema de

arquivos usa para identificar o arquivo ou diretório).

-c : lista em odem alfabética.

-h ou &#8211;human-readable: lista o conteúdo no modo “mais humano”. A unidade de

tamanho de cada objeto é a mais compreensível possível.

-C : lista o conteúdo em colunas.

-t : classifica o conteúdo pela data de última modificação (ctime).

-S : classifica os arquivos pelo tamanho.

-R: lista o conteúdo recursivamente, subdiretórios e arquivos.

-r: classifica o conteúdo em ordem alfabética reversa.

Exemplos:

Listando todo o conteúdo do diretório /root/LPI, inclusive arquivos ocultos, em modo

longo e “mais humano”:

#ls –lha /root/LPI

Listando por ordem alfabética reversa e de modo recursivo, todo o conteúdo de /etc:

#ls –lrR /etc

Detalhes de um arquivo:

Ao listar um diretório específico com &#8216;ls -l&#8217;, foram verificados alguns itens interessantes:

Acontece que a primeira coluna representa o tipo do arquivo e as permissões aplicadas a

ele. Dessa primeira coluna, vamos destacar por hora o tipo (primeiro campo).

Os arquivos estão divididos em alguns tipos:

\_ : é um arquivo regular.

d : é um diretório.

l : é um link simbólico.

b: é um arquivo de bloco (um disco ou uma partição).

c: é um arquivo de caracteres (um terminal, por exemplo).

p: é um pipe.

s: é um socket.

As outras colunas são:
