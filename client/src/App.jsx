import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Footer } from "./components/";
import { Home } from "./pages";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<div className="App text-sm sm:text-base">
			<Router>
				<div className="flex flex-col justify-between h-screen">
					<div>
						<Header />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
