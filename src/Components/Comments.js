export function Comments({ comments }) {
	return <div className="comments">
		{comments.map((comment) => {
			return <div className="comment">
				<p className="comment__author">{comment.author}</p>
				<time>{comment.created_at}</time>
				<p>{comment.body}</p>
				<p>Votes: {comment.votes} {comment.votes >= 0 ? <span>👍</span> : <span>👎</span>}</p>
				<hr></hr>
			</div>;
		})}
	</div>;
}