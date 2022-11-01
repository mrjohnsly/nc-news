import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Nav() {

	const [topics, setTopics] = useState([]);

	function fetchTopics() {
		axios.get(`https://sly-be-nc-news.herokuapp.com/api/topics`)
			.then((response) => {
				setTopics(response.data.topics);
			});
	}

	useEffect(fetchTopics, []);

	return <nav>
		<ul>
			<li><Link to="/">All Articles</Link></li>
			{topics.map((topic) => {
				return <li key={topic.slug}><Link to={`/articles/${topic.slug}`}>{topic.slug}</Link></li>;
			})}
		</ul>
	</nav>;
}