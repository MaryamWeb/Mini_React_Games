import React from 'react';
import Trophy from '../images/trophy.png';
import Lose from '../images/lose.jpg';

const Result = (props) => {
	const { gameOver,score,newGame,cards} = props;

	return (
		<>
			{cards.length > 1 && gameOver === false && <h3 className="text-center">Your Score so far is {score}pts</h3>}
			{gameOver===true&&
			<>
			{score > 10?
			<>
			<div className="text-center">
				<img alt='trophy' src={Trophy} className="mt-5 trophy"/>
				<h1 className="mt-2">Congratulations</h1>
				<h3>Your Total Score Is {score}pts</h3>
				<div className="text-center ">
					<button className="btn btn-link text-danger mb-2" onClick={newGame}>
						Play Again
					</button>
				</div>
			</div>
			</>
		:
			<>
			<div className="text-center">
				<img alt='crying' src={Lose} className="mt-5 lose"/>
				<h3>{score}pts is a low score, maybe try again?</h3>
				<div className="text-center ">
					<button className="btn btn-link text-danger mb-2" onClick={newGame}>
					Play Again
					</button>
				</div>
			</div>
			</>	
			}
			</>
			}
			
		</>
	);
};
export default Result;
