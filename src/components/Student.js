/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
const below = (mark) => (mark < 35 ? 'below-35' : '');

const Student = (context) => {
	const {
		state: { studentDetails, editing },
		actions: { setEditing, editStudent, deleteStudent },
	} = context;

	return <table className="student-table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Roll No</th>
				<th>Grade</th>
				<th>Language</th>
				<th>English</th>
				<th>Maths</th>
				<th>Science</th>
				<th>Social</th>
				<th>Total</th>
				<th>Result</th>
				<th>Clear</th>
				<th>Edit</th>
			</tr>
		</thead>
		<tbody>
			{ studentDetails.map((student) =>
				<tr key={ student.id }>
					<td onClick={ () => setEditing(student) }>
						{ student.name }</td>
					<td onClick={ () => setEditing(student) }>
						{ student.rollNo }</td>
					<td onClick={ () => setEditing(student) }>
						{ student.grade }</td>
					<td
						className={ below(student.language) }
						onClick={ () => setEditing(student) }
					>
						{ student.language }</td>
					<td
						className={ below(student.english) }
						onClick={ () => setEditing(student) }
					>
						{ student.english }</td>
					<td
						className={ below(student.maths) }
						onClick={ () => setEditing(student) }
					>
						{ student.maths }</td>
					<td
						className={ below(student.science) }
						onClick={ () => setEditing(student) }
					>
						{ student.science }</td>
					<td
						className={ below(student.social) }
						onClick={ () => setEditing(student) }
					>
						{ student.social }</td>
					<td>{ student.total }</td>
					<td className={ ` ${ student.result }` }>{ student.result }</td>
					<td>
						<button
							onClick={ () => deleteStudent(student.id) }
						>
							clear</button>
					</td>
					<td>
						<button
							disabled={ !editing }
							onClick={ () => editStudent(student) }
						>
							Edit
						</button>
					</td>

				</tr>) }
		</tbody>
	</table>;
};

export default Student;
