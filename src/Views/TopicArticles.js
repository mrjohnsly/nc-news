import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleCard } from "../Components/ArticleCard";

export function TopicArticles() {

	const topic = useParams("topic");
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	function fetchAllArticles() {
		setIsLoading(true);
		axios.get(`https://sly-be-nc-news.herokuapp.com/api/articles?topic=${topic.topic}`)
			.then(response => {
				setArticles(response.data.articles);
				setIsLoading(false);
			});
	}

	useEffect(fetchAllArticles, [topic]);

	return <>
		<h1>{topic.topic} Articles</h1>

		{(isLoading === true ? <p>Loading...</p> : <main className="articles-grid">
			{articles.map((article) => {
				return <ArticleCard article={article} key={article.article_id} />;
			})}
		</main>)}
	</>;
}