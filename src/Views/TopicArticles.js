import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleCard } from "../Components/ArticleCard";

export function TopicArticles() {

	const topic = useParams("topic");
	const [articles, setArticles] = useState([]);

	function fetchAllArticles() {
		axios.get(`https://sly-be-nc-news.herokuapp.com/api/articles?topic=${topic.topic}`)
			.then(response => {
				setArticles(response.data.articles);
			});
	}

	useEffect(fetchAllArticles, []);

	return <>
		<h1>{topic.topic} Articles</h1>

		<main className="articles-grid">
			{articles.map((article) => {
				return <ArticleCard article={article} key={article.article_id} />;
			})}
		</main>
	</>;
}