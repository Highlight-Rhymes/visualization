/*
    AFTER: Component responsible for sending user link to processing and receiving rhymes classes
    NOW: Use lyrics mock highlights and send to draw component
*/

import React from 'react'

function Input(props) {

  /**
    0 -> 32
   */
  let lyrics = `(Hey) É porque eu sigo na sombra
Mais um soldado que não tomba
Toma mais essa bomba
Eu sigo na sombra, não fico com a sobra
Sigo com o vento que sopra
Me atiraram e me erraram, me xisnovaram e não acharam
Me viram, se disfarçaram, quiseram flow, me chamaram
Sabe tudo que eu penso? Sabe tudo o que eu faço?
Então vai se escondendo, eu tô partindo pro próximo passo
`

  let classes = [
      {
        idClass: 1, // som sô
        intervals: [
          [26, 28],
          [41, 43],
          [57, 59],
          [63, 64],
          [78, 80],
          [95, 97],
        ]
      },
      {
        idClass: 2, // da bra ba
        intervals: [
          [29, 32],
          [44, 45],
          [60, 61],
          [65, 66],
          [81, 82],
          [98, 100],
          [120, 122],
          [147, 149]
        ]
      },
      {
        idClass: 3, // só
        intervals: [
          [118, 119],
          [144, 146]
        ]
      },
      {
        idClass: 5,
        intervals: [ // ra cha 
          [157, 158],
          [170, 171],
          [185, 186],
          [198, 200],
          [221, 223],
          [224, 225],
          [252, 253]
        ]
      },
      {
        idClass: 6, // ram cam plam
        intervals: [
          [159, 161],
          [172, 174],
          [187, 189],
          [201, 203],
          [210, 212],
          [226, 228],
          [236, 238],
          [254, 256]
        ]
      },
      {
        idClass: 7, // sá fá
        intervals: [
          [258, 259],
          [282, 283],
          [313, 315],
          [301, 302],
          [359, 361]
        ]
      },
      {
        idClass: 8,
        intervals: [ // be
          [260, 261],
          [284, 285],
          [317, 318],
          [341, 343]
        ]
      },
      {
        idClass: 9,
        intervals: [
          [275, 277],
          [325, 327]
        ]
      },
      {
        idClass: 10,
        intervals: [
          [278, 279]
        ]
      },
      {
        idClass: 11,
        intervals: [
        ]
      },
      ,
      {
        idClass: 12,
        intervals: [
          [303, 304],
          [328, 329],
          [344, 345],
          [362, 363]
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
