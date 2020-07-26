import React from 'react';
import { Segment } from 'peaks.js';
interface Props {
  segment: Segment;
  onClick: (id: string) => void;
  index: number;
}
const Interval = function(props: Props) {
  const { segment, onClick, index } = props;
  return (
    <div onClick={() => segment.id && onClick(segment.id)}>
      Intervalo {index}
      {segment.startTime} - {segment.endTime}
    </div>
  )
}

export default Interval;
