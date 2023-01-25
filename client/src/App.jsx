import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import { Header } from "./components"
import { Footer } from "./components/"
import { Home, Login, Signup, UserProfile } from "./pages"
import Container from "react-bootstrap/Container"

function App() {
	return (
		<div>
			<Router>
				<div>
					<div>
						<Header />
						<Container>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />
								<Route path="/user/:username" element={<UserProfile />} />
							</Routes>
						</Container>
					</div>
					<Footer />
				</div>
			</Router>
		</div>
	)
}

export default App
