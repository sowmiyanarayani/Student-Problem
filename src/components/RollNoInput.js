import { React } from 'react';
const RollNoInput = (context) => {
	const { state: { rollNo }, actions: { setRollNo }} = context;

	return <div>
		<label>Roll Number : </label>
		<input
			type="number"
			placeholder="enter the Roll number"
			value={ rollNo }
			onChange={ (e) => setRollNo(e.target.value) }
		/>
	</div>;
};

export default RollNoInput;
