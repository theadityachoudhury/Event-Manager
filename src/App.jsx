import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { UserContextProvider } from "./UserContext";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";
import axios from "axios";
import Success from "./pages/Success";
import Register from "./pages/Register";
import Forget from "./pages/Forget";
import Header from "./Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FaceReg from "./pages/FaceReg";
import ResetPassword from "./pages/ResetPassword";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Events from "./pages/Events/Events";
import Create from "./pages/Events/Create";
import RegisterEvent from "./pages/Events/Register";

const baseURL =
	window.location.hostname === "evently.adityachoudhury.com"
		? "https://backend.evently.adityachoudhury.com"
		: "http://localhost:5000";

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/dashboard" element={<Dashboard title="Dashboard" />} />
					<Route path="/settings" element={<Settings title="Settings" />} />
					<Route path="/profile" element={<Profile title="Settings" />} />
					<Route
						path="/events/create"
						element={<Create title="Create Events" />}
					/>
					<Route
						path="/events/register/:id?"
						element={<RegisterEvent title="Register Event" />}
					/>
				</Route>
				<Route path="/" element={<Header isPublic={true} />}>
					<Route path="/login" element={<Login title="Login" />} />
					<Route path="/verify" element={<Verify title="Verify Account" />} />
					<Route path="/face" element={<FaceReg title="Face Registration" />} />
					<Route path="/success" element={<Success title="Success" />} />
					<Route path="/register" element={<Register title="Register" />} />
					<Route path="/forget" element={<Forget title="Forget Password" />} />
					<Route
						path="/forget/:otp"
						element={<ResetPassword title="Reset Password" />}
					/>
					<Route path="/about" element={<About title="About" />} />
					<Route path="/events" element={<Events title="Events" />} />
					<Route path="/contact" element={<Contact title="Contact" />} />

					<Route index element={<Home title="Home" />} />
				</Route>
			</Routes>
		</UserContextProvider>
	);
}

export default App;
