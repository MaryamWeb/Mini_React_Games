import React, { useState } from 'react';
import { navigate } from '@reach/router';
import Pokeball from '../images/pokeball.png';


const Generate = (props) => {
	const [ amount, setAmount ] = useState(2);
	const { cards, setCards,newGame,setLoading} = props;
	
	const [message, setMessage] = useState('')
 
	let cardsb = [];

	const generate = () => {
		let idset = 1;
		const arr = [];
		//prevent same picture appearing more that one time
		while (arr.length < parseInt(amount)) {
			var r = Math.floor(Math.random() * (151 - 1 + 1) + 1); //Math.floor(Math.random() * (max - min + 1)) + min;
			if (arr.indexOf(r) === -1) arr.push(r);
		}
		for (let i = 1; i <= amount; i++) {
			let card1 = {
				id: idset++,
				name: `pic${i}`,
				url: `https://pokeres.bastionbot.org/images/pokemon/${arr[i - 1]}.png`,
				url2: `${Pokeball}`,
				flipped: false,
				found: false
			};

			let card2 = {
				id: idset++,
				name: `pic${i}`,
				url: `https://pokeres.bastionbot.org/images/pokemon/${arr[i - 1]}.png`,
				url2: `${Pokeball}`,
				flipped: false,
				found: false
			};
			cardsb.push(card1);
			cardsb.push(card2);
		}
		setCards([ cardsb ]);
		return cardsb;
	};

	const handleGenerateCards = (e) => {
		e.preventDefault();
		if(amount<=3){
			setMessage("That's not very challenging..")
			newGame();
		}
		else{
			setLoading(true);
			setMessage("")
			newGame();
			setTimeout(() => {
				setAmount(2)
				setLoading(false);
				setCards(generate().sort(() => Math.random() - 0.5));
				navigate(`/play`);
			}, 3000);
		}
	};

	return (
		<>
			<div className="d-flex justify-content-center">
				<form className="form-inline" onSubmit={handleGenerateCards}>
					<div className="form-group form-inline col-auto">
						<label className="my-1 mr-2">Number of cards: </label>
						<input
							type="number"
							className="form-control mb-2"
							onChange={(e) => setAmount(e.target.value)}
							min="2"
							max="50"
							value={amount}
						/>
					</div>
					<div className="col-auto">
						<button type="submit" className="btn btn-danger mb-2">
							Generate Cards
						</button>
					</div>
				</form>
			</div>
			{message!==''&&<p className='text-danger text-center'>{message}</p>}
			
		</>
	);
};

export default Generate;
