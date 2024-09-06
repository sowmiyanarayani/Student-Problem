/* eslint-disable complexity */
import { React } from 'react';

const validateForm = (state) =>
	state.name !== ''
		&& state.rollNo !== ''
		&& state.grade !== ''
		&& state.english !== ''
		&& state.language !== ''
		&& state.maths !== ''
		&& state.science !== ''
		&& state.social !== ''
	;

const Button = (context) => {
	const { actions: { addStudent, resetForm }, state } = context;

	return (
		<div>
			<button
				onClick={ () => (
					validateForm(state)
						? (addStudent(), resetForm())
						: alert('Please fill in all fields.')
				) }
			>
				Submit
			</button>
		</div>
	);
};

export default Button;
