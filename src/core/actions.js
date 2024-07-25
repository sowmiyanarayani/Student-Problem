import StudentManager from '../services/StudentManager';
const setStudentName = ({ data }) => ({ name: data });
const setStudentGrade = ({ data }) => ({ grade: data });
const setLanguage = ({ data }) => ({ language: data });
const setEnglish = ({ data }) => ({ english: data });
const setMaths = ({ data }) => ({ maths: data });
const setScience = ({ data }) => ({ science: data });
const setSocial = ({ data }) => ({ social: data });
const addStudent = (context) =>
	({ studentDetails: StudentManager.addStudent(context) });
const actions = {
	setStudentName, setStudentGrade,
	setEnglish, setLanguage, setMaths, setScience, setSocial,
	addStudent,
};

export default actions;
