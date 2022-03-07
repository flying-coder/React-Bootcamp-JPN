
import { useState } from "react";


// 以下は12-19行目までと同じ機能を果たす。
// export const List = (props) => {
// 	const title = props.title;
// 	return (
// 		<div>
// 			<h4>{title}</h4>
// 			<div>リストです</div>
// 		</div>
// 	);
// };

export const List = ({ title }) => {
	return (
		<div>
			<h4>{title}</h4>
			<div>リストです</div>
		</div>
	);
};