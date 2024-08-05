/* eslint-disable no-magic-numbers */
import React from 'react';

const below = (mark) => (mark < 35 ? 'below-35' : '');

const Student = ({
	id, name, rollNo,
	grade, english, language, maths, science, social, total, rank,
}) =>
	<tr key={ id }>
		<td>{ name }</td>
		<td>{ rollNo }</td>
		<td>{ grade }</td>
		<td className={ below(english) }>{ english }</td>
		<td className={ below(language) }>{ language }</td>
		<td className={ below(maths) }>{ maths }</td>
		<td className={ below(science) }>{ science }</td>
		<td className={ below(social) }>{ social }</td>
		<td>{ total }</td>
		<td className={ `student ${ rank }` }>{ rank }</td>

	</tr>
;

export default Student;
