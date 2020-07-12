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
`

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
