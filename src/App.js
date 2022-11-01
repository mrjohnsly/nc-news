import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { AllArticles } from './Views/AllArticles';
import { Article } from './Views/Article';
import { TopicArticles } from './Views/TopicArticles';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<AllArticles />} />
					<Route path="/articles/:topic" element={<TopicArticles />} />
					<Route path="/articles/article/:article_id" element={<Article />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
