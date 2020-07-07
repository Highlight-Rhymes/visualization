/*
    AFTER: Component responsible for sending user link to processing and receiving rhymes classes
    NOW: Use lyrics mock highlights and send to draw component
*/

import React from 'react'

function Input(props) {

  let lyrics = `É porque eu sigo na sombra
  Mais um soldado que não tomba
  Toma! Mais essa bomba
  Eu sigo na sombra, não fico com a sobra
  Sigo com o vento que sopra
  Me atiraram e me erraram
  Xisnovaram e não acharam
  Me viram, se disfarçaram, quiseram flow, me chamaram
  Sabe tudo que eu penso? Sabe tudo o que eu faço?
  Então vai se escondendo
  Eu tô partindo pro próximo passo
  Quem nunca, desistiu de um sonho, guiado por demônios
  Peça em baixo da blusa noite fria atrás dos ganhos
  Já que estou aqui vou me envolver
  Sem blefar e sem nada pra perder, poode crer (aham)
  Palavras não são roupas para ser mal usadas, falsas
  Nem chegou meia noite e um monte já dançou a valsa
  E o que me resta? Fugir do que desgasta, do que me arrasta
  E o que me testa, se afasta
  Voz na cabeça diz: Bk, você consegue
  Não preciso de bússola ou gps
  Sei o melhor caminho igual o google maps
  Num rap além caps, na era onde se impor é digitar com caps lock
  Agora eu e meus manos preparados
  Chega de pés parados
  Mas sempre no sapato, tem vários
  Que querem acelerar e nem sabe ligar o carro
  Sigo intacto, não estático, conheço um cara
  Que chegou tão alto escorregou e se espatifou
  Nessas horas que um homem vira menino
  A vida é complicada por isso, é no feminino
  Mas ela que tem o brilho, mas elas tiram do trilho
  Mas elas que me derramo, amo, e puxo o gatilho
  Vida adulta é pagar contas, mochila pesada nas costas
  Minhas linhas são minhas apostas, um brinde aos lucros e loucuras
  Eu sei que tenho de sobra no estoque munição
  Mas se eu erro o primeiro explano minha localização
  Sons de outras dimensões, contrariando as previsões
  E pra não ser mais um, sigo na sombra
  Eu sei que o meu jeito de pensar te fere
  Eu posso fazer um montão de filho
  E criar um time de assassino em série
  Suas questões sobre mim eu anulo
  Passando por provações mesmo sem ser bom aluno
  E foda-se o mundo, foda-se quem manda, foda-se meus inimigos (ah)
  Meus estoque de foda-se é infinito
  Tô no meio da zona, só visando o conforto
  Não confunda com a zona de conforto
  Seco na tempestade de mancada
  Onde um vacilão defende o outro
  Tipo o diabo pondo a mão no fogo por alguém
  Então lapido meus versos pra não ser
  Só mais um nome na lápide
  Fujo dos falsos amores e amigos
  Quantos por aí tem soluçado
  Baseado em crimes reais e não solucionados
  Quantos fingem ser puro, vejo o mal intencionado
  Mas a vitória é pra quem merece, o mundo tem selecionado
  Então escrevo com o melhor e pior que vem da alma
  Tipo um ferreiro criando a mais letal espada
  A mais letal das armas e quando a situação se agrava
  Grava, até o monge explode de raiva`

  let classes = [
      {
        idClass: 1,
        intervals: [
            [0, 4],
            [8, 12],
            [21, 27]
        ]
      },
      {
        idClass: 2,
        intervals: [
            [5, 7],
            [13, 20]
        ]
      },
      {
        idClass: 3,
        intervals: [
            [28, 40],
            [60, 120],
        ]
      }
  ]


  return (
    <div className="App">
        <p>Visualizar minha música</p>
        <button onClick={() => props.onSubmit(lyrics, classes)}>Visualizar</button>
    </div>
  );
}

export default Input;
