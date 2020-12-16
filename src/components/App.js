import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card.jsx';
import Generate from './Generate.jsx';
import { Router } from '@reach/router';

function App() {
	const [ cards, setCards ] = useState([]);
	return (
		<div className="container mt-5 ">
			<Generate cards={cards} setCards={setCards} />
			<Router>
				<Card path="/play" cards={cards} setCards={setCards} />
			</Router>
		</div>
	);
}
export default App;
