import { useState } from "react";

export function CommentForm() {

	const [usernameField, setUsernameField] = useState("");
	const [commentField, setCommentField] = useState("");

	function updateUsernameField(event) {
		setUsernameField(event.target.value);
	}

	function updateCommentField(event) {
		setCommentField(event.target.value);
	}

	return <form>
		<label>Username:</label>
		<br></br>
		<input type="text" placeholder="Your username" value={usernameField} onChange={updateUsernameField}></input>
		<br></br>
		<label>Comment:</label>
		<br></br>
		<textarea placeholder="I love this article!" value={commentField} onChange={updateCommentField}></textarea>
	</form>;
}