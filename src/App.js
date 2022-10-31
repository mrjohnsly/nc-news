import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { AllArticles } from './Views/AllArticles';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<AllArticles />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
