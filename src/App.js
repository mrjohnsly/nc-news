import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { AllArticles } from './Views/AllArticles';
import { TopicArticles } from './Views/TopicArticles';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<AllArticles />} />
					<Route path="/articles/:topic" element={<TopicArticles />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
