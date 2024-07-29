import { React } from 'react';
import NameInput from './NameInput';
import GradeInput from './GradeInput';
import RollNoInput from './RollNoInput';
import Subject from './Subject';
import AddStudent from './AddStudent';
import Button from './Button';

const Display = (context) => <div className="box">
	<h1>Student Progress</h1>
	<NameInput { ...context }/>
	<RollNoInput { ...context }/>
	<GradeInput { ...context }/>
	<Subject { ...context }/>
	<Button { ...context }/>
	<AddStudent { ...context }/>

</div>;

export default Display;
