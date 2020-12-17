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
	const [ loading, setLoading ] = useState(false);

	const newGame = () => {
		setGameOver(false)
		setCards([])
		setScore(0)
		setFlipCount(0)
	  }
	  
	return (
		<>
			<div className="container-fluid mt-5 row mx-2">
				<div className="col-8 px-0">  
					<Router>
						<Card path="/play" cards={cards} setGameOver={setGameOver} score={score} setScore={setScore} flipCount={flipCount} setFlipCount={setFlipCount} loading={loading}/>
					</Router>
				</div>
				<div className="col-4 mt-3">
					<Generate cards={cards} setCards={setCards} newGame={newGame} loading={loading} setLoading={setLoading}/>
					<Result gameOver={gameOver}  score={score}  newGame={newGame} cards={cards}/>
				</div>
			</div>
		</>
	);
}
export default App;
