/* eslint-disable no-magic-numbers */
import StudentManager from '../services/StudentManager';

const setStudentName = ({ data }) => ({ name: data });
const setRollNo = ({ data }) => ({ rollNo: data });
const setStudentGrade = ({ data }) => ({ grade: data });
const setLanguage = ({ data }) => ({ language: data });
const setEnglish = ({ data }) => ({ english: data });
const setMaths = ({ data }) => ({ maths: data });
const setScience = ({ data }) => ({ science: data });
const setSocial = ({ data }) => ({ social: data });

const addStudent = (context) =>
	({ studentDetails: StudentManager.addStudent(context) });

const deleteStudent = (context) =>
	({ studentDetails: StudentManager.deleteStudent(context) });

const extractStudentDetails = (data) => {
	const {
		name, rollNo, grade, english, language, maths,
		science, social, total, result,
	} = data;

	return {
		name, rollNo, grade, english, language,
		maths, science, social, total, result,
	};
};

const setEditing = (context) => {
	const { data } = context;

	return {
		editing: data,
		...extractStudentDetails(data),
	};
};

const editStudent = (context) =>
	({ studentDetails: StudentManager.editStudent(context) });

const resetForm = () => ({
	name: '',
	rollNo: '',
	grade: '',
	english: '',
	language: '',
	maths: '',
	science: '',
	social: '',
});

const actions = {
	setStudentName, setStudentGrade, setRollNo,
	setEnglish, setLanguage, setMaths, setScience, setSocial,
	addStudent, deleteStudent, editStudent, setEditing, resetForm,
};

export default actions;
