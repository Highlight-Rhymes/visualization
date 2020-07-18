import React from 'react';

interface SliderProps {
  /**
   * @param newX a number between 0 and 1, representing new time
   */
  onSlideEnd?: (newX: number) => any;
  onSlideBegin?: () => any;
  curX: number
}

const Slider = function({}: SliderProps) {
  return (
    <div>
      Current time on audio tag is:
      
    </div>
  )
}


interface TimeControlProps {
  curTime: number;
  duration: number;
  onTimeChange: (newTime: number) => any;
}

const TimeControl = function(props: TimeControlProps) {

  const { curTime, duration, onTimeChange } = props;

  const timeFromProportion = (relTime: number) => relTime * duration

  const handleTimeChange = (fraction: number) => {
    return onTimeChange(timeFromProportion(fraction))
  }

  return (
    <div>
      <div>
        {curTime}
      </div>
      <Slider onSlideEnd={handleTimeChange} curX={curTime / duration}/>
      <div>
        { duration - curTime }
      </div>
    </div>
  )
}

export default TimeControl;
