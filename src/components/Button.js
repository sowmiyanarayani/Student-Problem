import { React } from 'react';
const Button = (context) => {
	const { actions: { addStudent }} = context;

	return <div>
		<button onClick={ () => addStudent() }>
			Submit
		</button>
	</div>;
};

export default Button;
