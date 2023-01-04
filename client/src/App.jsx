import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Footer } from "./components/";
import { Home } from "./pages";

function App() {
	return (
		<Router>
			<div className="flex flex-col justify-between">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
