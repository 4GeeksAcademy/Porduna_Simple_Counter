import React, { useState } from "react";
import '../../styles/trafficlight.css';


export const TrafficLight = () => {
  const [color, setColor] = useState("");  // 'yellow' 'green' 'red'
  const [raceLight, setRaceLight] = useState (

)

  // Código básico original
    // return (
    // <div>
    //   <div className="container d-flex justify-content-around mt-5">
    //     <div className={"col-2 bg-success" + (color === 'green' ? " glow-green" : '')}
    //       onClick={() => setColor('green')}>
    //       Verde
    //     </div>
    //     <div className={"col-2 bg-warning " + (color === 'orange' ? 'glow-orange' : '')}
    //       onClick={() => setColor('orange')}>
    //       Amarillo
    //     </div>
    //     <div className={"col-2 bg-danger " + (color === 'red' ? 'glow-red' : '')}
    //       onClick={() => setColor('red')}>
    //       Rojo
    //     </div>
    //   </div>
    //  )
    // }

   return (
    <div className="container d-flex justify-content-around mt-5">
      <button id = "LuzRoja1" className={"rounded-circle " + (color === 'red' ? "glow-red" : '')}
        onClick={() => setColor('red')}> </button>
      {/* <button id = "LuzRoja2" className={"rounded-circle "}> </button>
      <button id = "LuzRoja3" className={"rounded-circle "}> </button> */}
      <button id = "LuzNaranja" className={"rounded-circle " + (color === 'orange' ? "glow-orange" : '')}
        onClick={() => setColor('orange')}> </button>
      <button id = "LuzVerde" className={"rounded-circle " + (color === 'green' ? "glow-green" : '')}
        onClick={() => setColor('green')}> </button>
    </div>
    // </div>  
  )
}
