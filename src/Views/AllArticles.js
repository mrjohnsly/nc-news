import { useEffect, useState } from "react";
import { ArticleCard } from "../Components/ArticleCard";
import { fetchAllArticles } from "../Services/APIService";

export function AllArticles() {

	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchAllArticles(setArticles, setIsLoading);
	}, []);

	return <>
		<h1>All Articles</h1>

		{(isLoading === true ? <p>Loading...</p> : <main className="articles-grid">
			{articles.map((article) => {
				return <ArticleCard article={article} key={article.article_id} />;
			})}
		</main>)}
	</>;
}