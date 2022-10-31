import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleCard } from "../Components/ArticleCard";

export function AllArticles() {

	const [articles, setArticles] = useState([]);

	function fetchAllArticles() {
		axios.get("https://sly-be-nc-news.herokuapp.com/api/articles")
			.then(response => {
				setArticles(response.data.articles);
			});
	}

	useEffect(fetchAllArticles, []);

	return <>
		<h1>All Articles</h1>

		{articles.map((article) => {
			return <ArticleCard article={article} key={article.article_id} />;
		})}
	</>;
}