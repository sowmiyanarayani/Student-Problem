import { React } from 'react';
import SubjectsInput from './SubjectsInput';
const Subject = (context) => {
	const { config: { subjects }} = context;

	return subjects.map((params, key) =>
		<SubjectsInput key={ key } { ...{ ...context, data: { ...params }} }/>);
};

export default Subject;
