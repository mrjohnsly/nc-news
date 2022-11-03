import axios from "axios";

function fetchAllArticles(setArticles, setIsLoading, topic) {
	setIsLoading(true);
	if (topic !== undefined) {
		axios.get(`https://sly-be-nc-news.herokuapp.com/api/articles?topic=${topic}`)
			.then(response => {
				setArticles(response.data.articles);
				setIsLoading(false);
			});
	} else {
		axios.get(`https://sly-be-nc-news.herokuapp.com/api/articles`)
			.then(response => {
				setArticles(response.data.articles);
				setIsLoading(false);
			});
	}
}

function fetchArticle(setArticle, setIsLoading, articleId) {
	setIsLoading(true);
	axios.get(`https://sly-be-nc-news.herokuapp.com/api/articles/${articleId}`)
		.then((response) => {
			setArticle(response.data.article);
			setIsLoading(false);
		});
}

function fetchComments(setComments, articleId) {
	axios.get(`https://sly-be-nc-news.herokuapp.com/api/articles/${articleId}/comments`)
		.then(({ data: { comments } }) => {
			setComments(comments);
		});
}

function fetchTopics(setTopics) {
	axios.get(`https://sly-be-nc-news.herokuapp.com/api/topics`)
		.then((response) => {
			setTopics(response.data.topics);
		});
}

function vote(vote, setArticle, setError, articleId) {
	setArticle((currentArticle) => {
		const newArticle = { ...currentArticle };
		newArticle.votes += vote;
		return newArticle;
	});

	axios.patch(`https://sly-be-nc-news.herokuapp.com/api/articles/${articleId}`, {
		inc_votes: vote
	})
		.catch(() => {
			setError(true);
			setArticle((currentArticle) => {
				const newArticle = { ...currentArticle };
				newArticle.votes -= vote;
				return newArticle;
			});
			setTimeout(() => { setError(false); }, 4000);
		});
}

export { fetchAllArticles, fetchArticle, fetchComments, fetchTopics, vote };