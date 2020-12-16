import React from 'react';
import Trophy from '../images/trophy.png';

const Result = (props) => {
	const { gameOver} = props;
	return (
		<>
		{gameOver===true?'yes':'no'}
		<div className="text-center">
            <img alt='trophy' src={Trophy} className="mt-5 trophy"/>
			<h1 className="mt-2">Congratulations</h1>
            <h3>Your Score is</h3>
		</div>
		</>
	);
};
export default Result;
