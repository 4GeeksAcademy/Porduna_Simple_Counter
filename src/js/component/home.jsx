import React from "react";

//include images into your bundle


// Componentes
// import { TrafficLight } from "./RaceTrafficLights";
import { SimpleCounterBonus } from "./SimpleCounterBonus";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
		{/* <TrafficLight /> */}
		<SimpleCounterBonus />
		</div>
	);
};

export default Home;
