/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Student from './Student';
const AddStudent = (context) => <table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Roll No</th>
			<th>Grade</th>
			<th>English</th>
			<th>Language</th>
			<th>Maths</th>
			<th>Science</th>
			<th>Social</th>
			<th>Total</th>
			<th>Rank</th>
			<th>Delete</th>
		</tr>
	</thead>
	<tbody>
		<Student { ...context }/>
	</tbody>
</table>;

export default AddStudent;
