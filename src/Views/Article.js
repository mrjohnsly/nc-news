import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Article() {

	const articleIdPath = useParams("article_id");
	const articleId = articleIdPath.article_id;
	const [isLoading, setIsLoading] = useState(true);
	const [article, setArticle] = useState({});

	function fetchArticle() {
		setIsLoading(true);
		axios.get(`https://sly-be-nc-news.herokuapp.com/api/articles/${articleId}`)
			.then((response) => {
				setArticle(response.data.article);
				setIsLoading(false);
			});
	}

	useEffect(fetchArticle, []);

	function voteUp() {
		setArticle((currentArticle) => {
			const newArticle = { ...currentArticle };
			newArticle.votes++;
			return newArticle;
		});

		axios.patch(`https://sly-be-nc-news.herokuapp.com/api/articles/${articleId}`, {
			inc_votes: 1
		})
			.then(() => {
			})
			.catch(() => {
				setArticle((currentArticle) => {
					const newArticle = { ...currentArticle };
					newArticle.votes--;
					return newArticle;
				});
			});
	}

	function voteDown() {
		setArticle((currentArticle) => {
			const newArticle = { ...currentArticle };
			newArticle.votes--;
			return newArticle;
		});

		axios.patch(`https://sly-be-nc-news.herokuapp.com/api/articles/${articleId}`, {
			inc_votes: 1
		})
			.then(() => {
			})
			.catch(() => {
				setArticle((currentArticle) => {
					const newArticle = { ...currentArticle };
					newArticle.votes++;
					return newArticle;
				});
			});
	}

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
				<button onClick={voteUp}>👍</button>
				<button onClick={voteDown}>👎</button>
			</aside>
		</article>}
	</>;
};