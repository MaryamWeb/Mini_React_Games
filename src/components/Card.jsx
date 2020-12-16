import React, { useState, useEffect } from 'react';

const Card = (props) => {
	const { cards, setCards,gameOver, setGameOver,score, setScore,flipCount,setFlipCount  } = props;
	const [ count, setCount ] = useState(0);
	const [ firstCard, setFirstCard ] = useState(null);
	const [ secondCard, setSecondCard ] = useState(null);
	

	//console.log('cards length',cards.length,'half',cards.length/2,'flip count',flipCount,'score',score,'game over',gameOver)

	useEffect( 
		() => {
			checkState();
			if(flipCount===cards.length/2){
				setGameOver(true)
			}
		},
		[ secondCard]
	);
	const checkState = () => {
		
		if (secondCard != null) {
			if (firstCard.name === secondCard.name) {
				setCount(0);
				firstCard.found = true;
				secondCard.found = true;
				setFirstCard(null);
				setSecondCard(null);
				setScore(score+20);
				setFlipCount(flipCount+1)
				console.log(flipCount)
				
			} else {
				setTimeout(() => {
					setCount(0);
					firstCard.flipped = !firstCard.flipped;
					secondCard.flipped = !secondCard.flipped;
					setFirstCard(null);
					setSecondCard(null);
					setScore(score-10);
				}, 1200);
			}
			
			
		}
		
	};

	const handleClick = (card) => {
		if (card.found===false && count<=2) {
			const currentCount = count + 1;
			setCount(currentCount);
			if (currentCount === 1) {
				card.flipped = !card.flipped;
				setFirstCard(card);
			} else if(currentCount ===2 && card.id!==firstCard.id){
				card.flipped = !card.flipped;
				setSecondCard(card);
			}else{ //this condition if we keep clicking on the same card
				setCount(1)
			}
		}
	};

	return (
		<>
			{cards.map(
				(c, i) =>
					c.flipped === false && c.found === false ? (
						<img
							key={i}
							alt={c.name}
							src={c.url2}
							className="single-card m-2"
							onClick={() => handleClick(c)}
						/>
					) : (
						<img
							key={i}
							alt={c.name}
							src={c.url}
							className="single-card m-2"
							onClick={() => handleClick(c)}
						/>
					)
			)}
		</>
	);
};
export default Card;
