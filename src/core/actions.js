import StudentManager from '../services/StudentManager';
import { peek } from '@laufire/utils/debug';
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
const editStudent = (context) =>
	({ studentDetails: StudentManager.editStudent(context) });

const saveStudentDetails = ({ data }) => ({ save: data });
const cancelEdit = ({ data }) => ({ cancel: data });
const setEditing = (context) =>
	({ isEditing: peek(StudentManager.isEditing(context)) });
const actions = {
	setStudentName, setStudentGrade, setRollNo,
	setEnglish, setLanguage, setMaths, setScience, setSocial,
	addStudent, editStudent,	saveStudentDetails, cancelEdit, setEditing,
};

export default actions;
