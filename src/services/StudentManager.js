/* eslint-disable no-magic-numbers */
/* eslint-disable object-shorthand */
/* eslint-disable max-len */
import { rndString } from '@laufire/utils/random';

const calculateTotalAndResult = (student) => {
	const { english, language, maths, science, social } = student;
	const totalMarks = Number(english) + Number(language) + Number(maths) + Number(science) + Number(social);
	const result = Math.min(
		language, english, maths, science, social
	) >= 35
		? 'pass'
		: 'fail';

	return { total: totalMarks, result };
};

const StudentManager = {
	addStudent: (context) => {
		const {
			state: {
				name, rollNo, grade,
				english, language, maths, science, social, studentDetails,
			},
			config: { idLength },
		} = context;

		const newStudent = {
			id: rndString(idLength),
			name, rollNo, grade, english, language, maths, science, social,
			...calculateTotalAndResult({ english, language, maths, science, social }),
		};

		return [...studentDetails, newStudent];
	},
	deleteStudent: (context) => {
		const { state: { studentDetails }, data } = context;

		return studentDetails.filter((student) => student.id !== data);
	},
	editStudent: (context) => {
		const {
			state: {
				studentDetails, editing, name, rollNo, grade,
				english, language, maths, science, social,
			},
		} = context;

		return studentDetails.map((student) =>
			(student.id === editing?.id
				? {
					...student,
					name, rollNo, grade, english, language, maths, science, social,
					...calculateTotalAndResult({ english, language, maths, science, social }),
				}
				: student));
	},

};

export default StudentManager;
