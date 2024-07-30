import { React } from 'react';
import { peek } from '@laufire/utils/debug';
const NameInput = (context) => {
	const { actions: { setStudentName }, state: { name }}
 = context;

	peek(context);
	return <div>
		<label> Name  </label>
		<input
			type="text"
			value={ name }
			placeholder="Enter the Full Name"
			onChange={ (event) => setStudentName(event.target.value) }
		/>
	</div>;
};

export default NameInput;
