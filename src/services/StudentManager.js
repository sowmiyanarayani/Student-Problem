/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
const StudentManager = {
	addStudent: (context) => {
		const {
			state: {
				name, rollNo, grade,
				english, language, maths, science, social, studentDetails,
			},
			config: { idLength },
		} = context;

		const totalMarks
			= Number(english) + Number(language)
			+ Number(maths) + Number(science) + Number(social);
		const result
			= Math.min(
				language,
				english,
				maths,
				science,
				social,
			) >= 35
				? 'pass'
				: 'fail';

		return [
			...studentDetails,
			{
				id: rndString(idLength),
				name: name,
				rollNo: rollNo,
				grade: grade,
				english: english,
				language: language,
				maths: maths,
				science: science,
				social: social,
				total: totalMarks,
				rank: result,
			},
		];
	},
};

export default StudentManager;
