import React, { useState, useEffect } from "react";
import '../../styles/trafficlight.css';

export const SimpleCounterBonus = () => {
	const [counter, setCounter] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
    const [status, setStatus] = useState({icon: "fas fa-clock", 
                                          title: "Clock", 
                                          titleStyle:"text-center text-success",
                                          redLight1: 'white',
                                          redLight2: 'white',
                                          redLight3: 'white',
                                          orangeLight: 'white',
                                          greenLight: 'white'});
	const [countUp, setCountUp] = useState(true);

    const [color, setColor] = useState("");

    const handleStart = () => {
        setIsRunning(!isRunning);
        if (countUp) {
            setStatus({redLight1: 'glow-red',
                       redLight2: 'glow-red',
                       redLight3: 'glow-red',
                       orangeLight: 'glow-orange',
                       greenLight: 'glow-green',
                       icon: "fas fa-stopwatch", 
                       title:"Chronometer", 
                       titleStyle:"text-center text-primary"});
            // setTimeout(setStatus, 1000, "redLight2");
            // setTimeout(setStatus, 2000, "redLight3");
            // setTimeout(setStatus, 3000, "orangeLight");
            // setTimeout(setStatus, 4000, "greenLight", "icon", "title", "titleStyle");
        } else {
            setStatus({icon: "fas fa-history", 
                       title:"Timer", 
                       titleStyle:"text-center text-danger",
                       redLight1: 'white',
                       redLight2: 'white',
                       redLight3: 'white',
                       orangeLight: 'white',
                       greenLight: 'white'});
        }
    };

	const handleReset = () => {
		setCounter(0);
		setIsRunning(false);
        setStatus({icon:"fas fa-clock", 
                   title:"Clock", 
                   titleStyle:"text-center text-success"});
        setCountUp(true);
	};

    const handleTimer = (event) => {
        if (event.target.value !== null && 
            event.target.value >= 0 && 
            event.target.value.length > 0 && 
            !isNaN(event.target.value)) 
        {
            setCounter(parseInt(event.target.value));
            setStatus({icon: "fas fa-history", 
                       title:"Timer", 
                       titleStyle:"text-center text-danger",
                       redLight1: 'glow-green',
                       redLight2: 'glow-green',
                       redLight3: 'glow-green',
                       orangeLight: 'glow-green',
                       greenLight: 'glow-green'});
            setCountUp(false);
        } else {
            setCounter(0);
            event.target.value = "";
        }
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


    return ( 
        <div className="container">
            <h1 className="mt-5">Simple Counter</h1>
            <h2 className={status.titleStyle}>{status.title}</h2>
                <div className="container">
                    <div className="container d-flex justify-content-around mt-5">
                    <button id = "LuzRoja1" className={"rounded-circle " + status.redLight1 }> </button>
                    <button id = "LuzRoja2" className={"rounded-circle " + status.redLight2 }> </button>
                    <button id = "LuzRoja3" className={"rounded-circle " + status.redLight3 }> </button>
                    <button id = "LuzNaranja" className={"rounded-circle " + status.orangeLight}> </button>
                    <button id = "LuzVerde" className={"rounded-circle " + status.greenLight}> </button>
                    </div>
                </div>
            <div className="big-counter">
            {/* Days */}
                <div>{Math.floor(counter / 288000000 % 10)}d</div>
                <div>{' '}</div>
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
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" onClick={handleStart} className="btn btn-outline-success">
                        {isRunning ? 'Pause' : counter == 0 ? 'Start' : 'Continue'}
                    </button>
                    <button type="button" onClick={handleReset} className="btn btn-outline-danger">
                        Reset
                    </button>
                </div>
            </div>
            <div className="container bg-dark">
                <div className="input-group my-3 p-3">
                    <span className="input-group-text bg-warning">Set Timer</span>
                    <input type="text" onChange={(event) => handleTimer(event)} aria-label="First name" className="form-control" placeholder="Set the timer in tenths of a second"/>
                </div>
            </div>
        </div>
    );
};