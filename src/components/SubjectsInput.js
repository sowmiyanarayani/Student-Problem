import { React } from 'react';
const SubjectsInput = (context) => {
	const { actions, state, data: { label, value, event }} = context;

	return <div>
		<label>{ label } </label>
		<input
			type="number"
			placeholder="enter the mark"
			value={ state[value] }
			onChange={ (e) => actions[event](e.target.value) }
		/>
	</div>;
};

export default SubjectsInput;
