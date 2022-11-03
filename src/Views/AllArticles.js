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

		{(isLoading === true ? <p>Loading...</p> : <main>
			<button>Sort by date</button>
			<button>Sort by comment count</button>
			<button>Sort by votes</button>
			<div className="articles-grid">
				{articles.map((article) => {
					return <ArticleCard article={article} key={article.article_id} />;
				})}
			</div>
		</main>)}
	</>;
}