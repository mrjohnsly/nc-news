import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleCard } from "../Components/ArticleCard";
import { fetchAllArticles } from "../Services/APIService";

export function TopicArticles() {

	const topic = useParams("topic");
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchAllArticles(setArticles, setIsLoading, topic.topic);
	}, [topic]);

	return <>
		<h1>{topic.topic} Articles</h1>

		{(isLoading === true ? <p>Loading...</p> : <main className="articles-grid">
			{articles.map((article) => {
				return <ArticleCard article={article} key={article.article_id} />;
			})}
		</main>)}
	</>;
}