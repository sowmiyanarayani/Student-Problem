import { React } from 'react';
const Student = ({
	id, name, rollNo,
	grade, english, language, maths, science, social, total, rank,
}) =>
	<tr key={ id }>
		<td>{ name }</td>
		<td>{ rollNo }</td>
		<td>{ grade }</td>
		<td>{ english }</td>
		<td>{ language }</td>
		<td>{ maths }</td>
		<td>{ science }</td>
		<td>{ social }</td>
		<td>{ total }</td>
		<td className={ `student ${ rank } }` }>{ rank }</td>
	</tr>;

export default Student;
