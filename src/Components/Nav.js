import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../Services/APIService";

export function Nav() {

	const [topics, setTopics] = useState([]);

	useEffect(() => {
		fetchTopics(setTopics);
	}, []);

	return <nav>
		<ul>
			<li><Link to="/">All Articles</Link></li>
			{topics.map((topic) => {
				return <li key={topic.slug}><Link to={`/articles/${topic.slug}`}>{topic.slug}</Link></li>;
			})}
		</ul>
	</nav>;
}