export function ArticleCard(props) {
	const { article } = props;
	return <article>
		<p>{article.author}</p>
		<time datetime="{article.created_at}">{article.created_at}</time>
		<h2>{article.title}</h2>
		<footer>
			<p class="article-topic-link">{article.topic}</p>
			<p>Comments: {article.comment_count} 💬</p>
			<p>Votes: {article.votes} 👍</p>
		</footer>
	</article >;
}