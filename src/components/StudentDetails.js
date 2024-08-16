import { React } from 'react';
const StudentDetails = (context) => {
	const { actions, state, data: { label, name, event, type }} = context;

	return <div>
		<label>{ label } </label>
		<input
			type={ state[type] }
			placeholder="enter the mark"
			value={ state[name] }
			onChange={ (e) => actions[event](e.target.value) }
		/>
	</div>;
};

export default StudentDetails;
