import React from "react";

//include images into your bundle


// Componentes
import { SimpleCounterBonus } from "./SimpleCounterBonus";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<SimpleCounterBonus />
		</div>
	);
};

export default Home;
