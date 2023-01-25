import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import { Header } from "./components"
import { Footer } from "./components/"
import { Home, Login, Signup, UserProfile } from "./pages"
import Container from "react-bootstrap/Container"

function App() {
	return (
		<Router>
			<Container
				fluid
				className="p-0 d-flex flex-column justify-content-between vh-100"
			>
				<Container fluid className="p-0">
					<Header />
					<Container>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/user/:username" element={<UserProfile />} />
						</Routes>
					</Container>
				</Container>
				<Footer />
			</Container>
		</Router>
	)
}

export default App
