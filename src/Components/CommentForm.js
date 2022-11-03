import axios from "axios";
import { useState } from "react";

export function CommentForm(props) {

	const { articleId, setComments } = props;

	const [usernameField, setUsernameField] = useState("");
	const [commentField, setCommentField] = useState("");

	function updateUsernameField(event) {
		setUsernameField(event.target.value);
	}

	function updateCommentField(event) {
		setCommentField(event.target.value);
	}

	function handleCommentSubmit(event) {
		event.preventDefault();

		setComments((currentComments) => {
			const newComments = [...currentComments];
			const newComment = {
				comment_id: 1,
				body: commentField,
				article_id: articleId,
				author: usernameField,
				votes: 0
			};
			newComments.push(newComment);
			return newComments;
		});

		axios.post(`https://sly-be-nc-news.herokuapp.com/api/articless/${articleId}/comments`, {
			"username": usernameField,
			"body": commentField
		})
			.catch(() => {
				setComments((currentComments) => {
					const restoredComments = [...currentComments];
					restoredComments.pop();
					return restoredComments;
				});
			});
	}

	return <form onSubmit={handleCommentSubmit}>
		<label>Username:</label>
		<br></br>
		<input type="text" placeholder="Your username" value={usernameField} onChange={updateUsernameField}></input>
		<br></br>
		<label>Comment:</label>
		<br></br>
		<textarea placeholder="I love this article!" value={commentField} onChange={updateCommentField}></textarea>
		<button type="submit">Submit</button>
	</form>;
}