import React, { useState, useEffect } from 'react'
import './Drawer.css'

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Recebe um array de intervalos que não se sobrepõem e estão ordenados pelo idxInicial
 * Retorna um array com os intervalos faltantes
 * Ex: recebe [{color: ___, interval: [1, 3]}, { color: ___, interval: [5, 7]}] e size = 10 retorna [{color: ___, interval: [0, 0]}, {color: ___, interval: [1, 3]}, {color: ___, interval: [4, 4]}, {color: ___, interval: [5, 7]}, {color: ___, interval: [8, 9]}]
 * @param {{color: string, interval: [ number, number ]}[]} colorIntervalArray 
 * @param {number} size
 */
function fillMissingIntervals(colorIntervalArray, size, color = 'black') {
  let newIntervals = [];
  let curMissing = 0;
  for (const interval of colorIntervalArray) {
    const [ start, end ] = interval.interval;
    if (start > curMissing) {
      newIntervals.push({color, interval: [ curMissing, start-1 ]})
    }
    curMissing = end + 1
    newIntervals.push( {color: interval.color, interval: [ start, end ]} );
  }
  const last = colorIntervalArray[colorIntervalArray.length-1].interval[1]
  if (size && last < size - 1) {
    newIntervals.push( {color, interval: [ last + 1, size - 1 ]} )
  }
  return newIntervals;
}

const Drawer = function(props) {
 
  const { lyrics, classes } = props;

  const [ display, setDisplay ] = useState(null)

  useEffect(() => {
    let components = []
    if (classes && lyrics) {
      let tmp = classes.reduce(
        (acc, _class) => {
          const randomClassColor = getRandomColor()
          return acc.concat(_class.intervals.map(interval => (
            {
              color: randomClassColor,
              interval
            }
          ))
        )}, [])
      tmp = tmp.sort((intervalColorA, intervalColorB) => intervalColorA.interval[0] - intervalColorB.interval[0])
      let tmpLyrics = lyrics;
      tmp = fillMissingIntervals(tmp, tmpLyrics.length)
      tmp.forEach(({ color, interval }, indexI) => {
        const [ start, end ] = interval;
        let syllable = tmpLyrics.substring(start, end+1)
        components.push(
          <div className="highlight-container"
            key={`${indexI}}`} 
            style={{ backgroundColor: color }}>
              {syllable}
          </div>
        )
      });
      setDisplay(components)
    }
  }, [lyrics, classes]);

 
  return (
    <div className="Drawer">
      {display}
    </div>
  )
}
 
export default Drawer;