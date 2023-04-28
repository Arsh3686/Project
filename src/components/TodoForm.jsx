import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text) return;
		addTodo(text);
		setText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Add Todo..."
			/>
		</form>
	);
};

export default TodoForm;
