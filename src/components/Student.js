/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';

const below = (mark) => (mark < 35 ? 'below-35' : '');

const Student = (context) => {
	const { state: { studentDetails }, actions } = context;

	return studentDetails.map((student) =>
		<tr key={ student.id }>
			<td>{ student.name }</td>
			<td>{ student.rollNo }</td>
			<td>{ student.grade }</td>
			<td className={ below(student.english) }>{ student.english }</td>
			<td className={ below(student.language) }>{ student.language }</td>
			<td className={ below(student.maths) }>{ student.maths }</td>
			<td className={ below(student.science) }>{ student.science }</td>
			<td className={ below(student.social) }>{ student.social }</td>
			<td>{ student.total }</td>
			<td className={ ` ${ student.rank }` }>{ student.rank }</td>
			<td>
				<button onClick={ () => actions.deleteStudent(student.id) }>
					Delete</button>
			</td>

		</tr>);
};

export default Student;
