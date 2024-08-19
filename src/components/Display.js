import { React } from 'react';
import AddStudent from './AddStudent';
import Button from './Button';
import StudentInputs from './StudentInputs';

const Display = (context) => <div className="container">
	<h1>Student Progress</h1>
	<StudentInputs { ...context }/>
	<Button { ...context }/>
	<AddStudent { ...context }/>
</div>;

export default Display;
