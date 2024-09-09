import { React } from 'react';
const StudentDetails = (context) => {
	const {
		actions, state,
		data: { label, name, event, type, placeHolder },
	} = context;

	return <div className="form">

		<label>{ label } </label>
		<input
			type={ type }
			placeholder={ placeHolder }
			value={ state[name] }
			onChange={ (e) => actions[event](e.target.value) }
			required={ true }
		/>
	</div>;
};

export default StudentDetails;
