import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "./Comments";

export function Article() {

	const articleIdPath = useParams("article_id");
	const articleId = articleIdPath.article_id;
	const [isLoading, setIsLoading] = useState(true);
	const [article, setArticle] = useState({});
	const [error, setError] = useState(null);
	const [comments, setComments] = useState([]);

	function fetchArticle() {
		setIsLoading(true);
		axios.get(`https://sly-be-nc-news.herokuapp.com/api/articles/${articleId}`)
			.then((response) => {
				setArticle(response.data.article);
				setIsLoading(false);
			});
	}

	useEffect(fetchArticle, []);

	function vote(vote) {
		setArticle((currentArticle) => {
			const newArticle = { ...currentArticle };
			newArticle.votes += vote;
			return newArticle;
		});

		axios.patch(`https://sly-be-nc-news.herokuapp.com/api/articles/${articleId}`, {
			inc_votes: vote
		})
			.catch(() => {
				setError(true);
				setArticle((currentArticle) => {
					const newArticle = { ...currentArticle };
					newArticle.votes -= vote;
					return newArticle;
				});
				setTimeout(() => { setError(false); }, 4000);
			});
	}

	function fetchComments() {
		axios.get(`https://sly-be-nc-news.herokuapp.com/api/articles/${articleId}/comments`)
			.then(({ data: { comments } }) => {
				console.log(comments);
				setComments(comments);
			});
	}

	useEffect(fetchComments, []);

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
				<button onClick={() => { vote(1); }}>👍</button>
				<button onClick={() => { vote(-1); }}>👎</button>
				{error === true && <p>Error voting</p>}
			</aside>

			<Comments comments={comments} />
		</article>}
	</>;
};