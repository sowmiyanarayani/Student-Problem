import { React } from 'react';
import StudentDetails from './StudentDetails';
const StudentInputs = (context) => {
	const { config: { studentDetails }} = context;

	return (
		<div className="student-inputs">
			{ studentDetails.map((params, key) =>
				<StudentDetails
					key={ key }
					{ ...{ ...context, data: { ...params }} }
				/>) }
		</div>);
};

export default StudentInputs;
