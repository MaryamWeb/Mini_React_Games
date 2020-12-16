import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card.jsx';
import Generate from './Generate.jsx';
import Result from './Result.jsx';
import { Router } from '@reach/router';

function App() {
	const [ cards, setCards ] = useState([]);
	const [gameOver, setGameOver]=useState(false)
	return (
		<>
			<div className="container-fluid mt-5 row">
				<div className="col-8 px-0 d-flex justify-content-center flex-wrap ">  
					<Router>
						<Card path="/play" cards={cards} setCards={setCards} gameOver={gameOver} setGameOver={setGameOver}/>
					</Router>
				</div>
				<div className="col-4 mt-3">
					<Generate cards={cards} setCards={setCards} />
					<Result gameOver={gameOver}/>
				</div>
			</div>
		</>
	);
}
export default App;
