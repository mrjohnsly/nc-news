export function ArticleCard(props) {
	const { article } = props;
	return <article>
		<p>{article.author}</p>
		<time datetime="{article.created_at}">{article.created_at}</time>
		<h2>{article.title}</h2>
		<p>{article.topic}</p>
		<p>{article.comment_count}</p>
		<p>{article.votes}</p>
	</article >;
}