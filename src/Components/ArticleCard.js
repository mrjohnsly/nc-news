import { Link } from "react-router-dom";

export function ArticleCard(props) {
	const { article } = props;
	return <article>
		<p>{article.author}</p>
		<time datetime="{article.created_at}">{article.created_at}</time>
		<Link to={`/articles/article/${article.article_id}`}><h2>{article.title}</h2></Link>
		<footer>
			<p className="article-topic-link">{article.topic}</p>
			<p>Comments: {article.comment_count} 💬</p>
			<p>Votes: {article.votes} 👍</p>
		</footer>
	</article >;
}