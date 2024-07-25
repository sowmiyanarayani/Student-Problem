/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
const CustomerManager = {
	addCustomer: (context) => {
		const {
			state: {
				name, rollNo, grade,
				english, language, maths, science, social, studentDetails,
			},
			config: { idLength },
		} = context;

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
			},
		];
	},
};

export default CustomerManager;
