import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentForm } from "../Components/CommentForm";
import { fetchArticle, fetchComments, vote } from "../Services/APIService";
import { Comments } from "../Components/Comments";

export function Article() {

	const articleIdPath = useParams("article_id");
	const articleId = articleIdPath.article_id;
	const [isLoading, setIsLoading] = useState(true);
	const [article, setArticle] = useState({});
	const [error, setError] = useState(null);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchArticle(setArticle, setIsLoading, articleId);
	}, [articleId]);
	useEffect(() => {
		fetchComments(setComments, articleId);
	}, [articleId]);

	return <>
		{isLoading === true ? <p>Loading...</p> : <article className="single-article">
			<div>
				<h2>{article.title}</h2>
				<p>{article.body}</p>
			</div>
			<aside>
				<p>Posted by: {article.author}</p>
				<time datetime="{article.created_at}">{article.created_at}</time>
				<p className="article-topic-link">{article.topic}</p>
				<p>Comments: {article.comment_count} 💬</p>
				<p>Votes: {article.votes}</p>
				<button onClick={() => { vote(1, setArticle, setError, articleId); }}>👍</button>
				<button onClick={() => { vote(-1, setArticle, setError, articleId); }}>👎</button>
				{error === true && <p>Error voting</p>}
			</aside>

			<Comments comments={comments} />

			<br></br>
			<CommentForm articleId={articleId} comments={comments} />
		</article>}
	</>;
};