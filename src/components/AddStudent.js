/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-lines-per-function */
import Student from './Student';
const AddStudent = (context) => {
	const { state: { studentDetails }} = context;

	return (
		<table className="grid">
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
				</tr>
			</thead>
			<tbody>
				{ studentDetails.map((student) =>
					<Student
						key={ student.id }
						name={ student.name }
						rollNo={ student.rollNo }
						grade={ student.grade }
						english={ student.english }
						language={ student.language }
						maths={ student.maths }
						science={ student.science }
						social={ student.social }
						total={ student.total }
						rank={ student.rank }
					/>) }
			</tbody>
		</table>
	);
};

export default AddStudent;
