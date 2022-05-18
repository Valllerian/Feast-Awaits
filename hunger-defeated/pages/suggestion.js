import Suggestion from '../components/Suggestion';
import { useState } from 'react';


export default function Ad() {
	const [res, setRes] = useState('');

	const handleSubmit = (value) => {
		setRes(value);
	};
	return (
		<div className=''>
			<Suggestion onSubmitted={handleSubmit} />
			<div className=''>
				<h1 className=''>Displaying OpenAI bot response here:</h1>
				{res.length !== 0 ? (
					<p>{res}</p>
				) : (
					null
				)}
			</div>
		</div>
	);
}