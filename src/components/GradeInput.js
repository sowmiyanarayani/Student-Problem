import { React } from 'react';
const GradeInput = (context) => {
	const {
		actions: { setStudentGrade },
		state: { grade },
	} = context;

	return <div>
		<label>Grade </label>
		<select
			type="radio"
			value={ grade }
			onChange={ (event) => setStudentGrade(event.target.value) }
		>
			<option value="">Select Grade</option>
			<option value="11">11</option>
			<option value="12">12</option>
		</select>
	</div>;
};

export default GradeInput;
