import { React } from 'react';
import StudentDetails from './StudentDetails';
const StudentInputs = (context) => {
	const { config: { studentDetails }} = context;

	return studentDetails.map((params, key) =>
		<StudentDetails
			key={ key }
			{ ...{ ...context, data: { ...params }} }
		/>);
};

export default StudentInputs;
