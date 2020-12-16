import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import React, { useState } from 'react';
import Generate from './Generate.jsx';
import Result from './Result.jsx';
import Card from './Card.jsx';

function App() {
	const [ cards, setCards ] = useState([]);
	const [gameOver, setGameOver]=useState(false)
	const[score,setScore]=useState(0);
	const[flipCount,setFlipCount]=useState(0)

	const newGame = () => {
		setGameOver(false)
		setCards([])
		setScore(0)
		setFlipCount(0)
	  }
	  
	return (
		<>
			<div className="container-fluid mt-5 row">
				<div className="col-8 px-0 d-flex justify-content-center flex-wrap ">  
					<Router>
						<Card path="/play" cards={cards} setCards={setCards} gameOver={gameOver} setGameOver={setGameOver} score={score} setScore={setScore} flipCount={flipCount} setFlipCount={setFlipCount}/>
					</Router>
				</div>
				<div className="col-4 mt-3">
					<Generate cards={cards} setCards={setCards} newGame={newGame}/>
					<Result gameOver={gameOver}  score={score}  newGame={newGame} cards={cards}/>
				</div>
			</div>
		</>
	);
}
export default App;
