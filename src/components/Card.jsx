import React, { useState, useEffect } from 'react';

const Card = (props) => {
	const { cards, setCards } = props;
	const [ count, setCount ] = useState(0);
	const [ firstCard, setFirstCard ] = useState(null);
	const [ secondCard, setSecondCard ] = useState(null);
	const { gameOver, setGameOver } = props;

	useEffect( 
		() => {
			checkState();
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
				
			} else {
				setTimeout(() => {
					setCount(0);
					firstCard.flipped = !firstCard.flipped;
					secondCard.flipped = !secondCard.flipped;
					setFirstCard(null);
					setSecondCard(null);
					 
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
		<div className="">
			{cards.map(
				(c, i) =>
					c.flipped === false && c.found === false ? (
						<img
							key={i}
							alt={c.name}
							src={c.url2}
							className="  single-card m-2"
							onClick={() => handleClick(c)}
						/>
					) : (
						<img
							key={i}
							alt={c.name}
							src={c.url}
							className="  single-card  m-2"
							onClick={() => handleClick(c)}
						/>
					)
			)}
		</div>
	);
};
export default Card;
