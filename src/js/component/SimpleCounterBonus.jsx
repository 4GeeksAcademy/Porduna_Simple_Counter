import React, { useState, useEffect } from "react";
	import '../../styles/trafficlight.css';
      

export const SimpleCounterBonus = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning ] = useState(false);
  const [status, setStatus] = useState ({
    title: 'Clock',
    icon: "far fa-clock",
    titleStyles: 'text-primary'
  })
  const [countUp, setCountUp] = useState(true);

  
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      setStatus ({
        title: 'Chronometer',
        icon: "fas fa-stopwatch",
        titleStyle: 'text-success'
      })
    } else {
      setIsRunning(false)
    }
  }
 
  const handleReset = () => {
    setCounter(0);
    setIsRunning(false);
    setStatus ({
      title: 'Clock',
      icon: "far fa-clock",
      titleStyles: 'text-primary'
    })
  }
  const interval = () => {

  }

  useEffect(() => {
		if (isRunning) {
			const newInterval = setInterval(() => {
				if (countUp) {
					setCounter(counter => counter + 1);
				} else {
                    if (countUp === false && counter >= 0) {
                        if (counter === 0) {
                            setCounter(0);
                            setIsRunning(false);
                        } else {
                            setCounter(counter => counter - 1);
                        }
    				}
                }
			}, 10);

			return () => clearInterval(newInterval);
		}
	}, [isRunning, counter, countUp]);

export const TrafficLight = () => {
  const [color, setColor] = useState("");  // 'yellow' 'green' 'red'

  return (
    <div className="container">
      <h1>Simple Counter</h1>
      <h2 className={status.titleStyles}>{status.title}</h2>
	  <div className="container d-flex justify-content-around mt-5">
      <div className={"col-2 bg-success" + (color === 'green' ? " glow-green" : '')}
        onClick={() => setColor('green')}></div>
      <div className={"col-2 bg-warning " + (color === 'yellow' ? 'glow-yellow' : '')}
        onClick={() => setColor('yellow')}></div>
      <div className={"col-2 bg-danger " + (color === 'red' ? 'glow-red' : '')}
        onClick={() => setColor('red')}></div>
    </div>
  )

      <div className="big-counter">
        <div><i className={status.icon}></i></div>
        {/* Days */}
        <div>{Math.floor(counter / 288000000 % 10)}</div>
        <div>{':'}</div>
        {/* Hours */}
        <div>{Math.floor(counter / 12000000 % 24)}</div>
        <div>{Math.floor(counter / 1200000 % 10)}</div>
        <div>{':'}</div>
        {/* Minutes */}
        <div>{Math.floor(counter / 60000 % 6)}</div>
        <div>{Math.floor(counter / 6000 % 10)}</div>
        <div>{':'}</div>
        {/* Seconds */}
        <div>{Math.floor(counter / 1000 % 6)}</div>
        <div>{Math.floor(counter / 100 % 10)}</div>
        <div>{','}</div>
        <div>{Math.floor(counter / 10 % 10)}</div>
        <div>{Math.floor(counter % 10)}</div>
        <div>
          <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button onClick={handleStart} type="button" className="btn btn-outline-success">
              {isRunning ? 'Pause' : counter === 0 ? 'Start' : 'Continue'}
              </button>
            <button onClick={handleReset} type="button" className="btn btn-outline-danger">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}