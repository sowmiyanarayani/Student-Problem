/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Student from './Student';
const AddStudent = (context) => <table>
	<tbody>
		<Student { ...context }/>
	</tbody>
</table>;

export default AddStudent;
