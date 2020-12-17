import React from 'react';
import Trophy from '../images/trophy.png';
import Lose from '../images/lose.jpg';
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';

const Result = (props) => {
	const { gameOver,score,newGame,cards} = props;

	return (
		<>
			{cards.length > 1 && gameOver === false && <h3 className="text-center mt-3">Your Score so far is <span>{score}</span>pts</h3>}
			{gameOver===true&&
			<>
			{score > 10?
			<>
			<div className="text-center">
				<Fade duration={3000}>
					<Swing forever duration={2000}>
						<img alt='trophy' src={Trophy} className="mt-5 trophy"/>
					</Swing>
				
				<h1 className="mt-3">Congratulations</h1>
				<h3>Your Total Score Is <span>{score}</span>pts</h3>
				<div className="text-center ">
					<button className="btn btn-link mb-2 play-again" onClick={newGame}>
						Play Again
					</button>
				</div>
				</Fade>
			</div>
			</>
		:
			<>
			<div className="text-center">
				<img alt='crying' src={Lose} className="mt-5 lose"/>
				<h3 className="mt-3"><span>{score}</span>pts is a low score, maybe try again?</h3>
				<div className="text-center ">
					<button className="btn btn-link mb-2 play-again" onClick={newGame}>
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
