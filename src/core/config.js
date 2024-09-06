const config = {
	idLength: 8,
	studentDetails: [
		{
			label: 'Name',
			name: 'name',
			event: 'setStudentName',
			type: 'text',
			placeHolder: 'Enter the Name',
		},
		{
			label: 'RollNo',
			name: 'rollNo',
			event: 'setRollNo',
			type: 'number',
			placeHolder: 'Enter the Roll Number',
		},
		{
			label: 'Grade',
			name: 'grade',
			event: 'setStudentGrade',
			type: 'number',
			placeHolder: 'Enter the Grade',
		},

		{
			label: 'English',
			name: 'english',
			event: 'setEnglish',
			type: 'number',
			placeHolder: 'Enter the Mark',
		},
		{
			label: 'Language',
			name: 'language',
			event: 'setLanguage',
			type: 'number',
			placeHolder: 'Enter the Mark',
		},
		{
			label: 'Maths',
			name: 'maths',
			event: 'setMaths',
			type: 'number',
			placeHolder: 'Enter the Mark',
		},
		{
			label: 'Science',
			name: 'science',
			event: 'setScience',
			type: 'number',
			placeHolder: 'Enter the Mark',
		},
		{
			label: 'Social ',
			name: 'social',
			event: 'setSocial',
			type: 'number',
			placeHolder: 'Enter the Mark',
		},
	],

};

export default config;
