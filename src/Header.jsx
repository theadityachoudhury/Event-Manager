import { Link, Navigate, Outlet } from "react-router-dom";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./pages/components/Loader.jsx";
import { useUserContext } from "./UserContext.jsx";
import NavItems from "./pages/components/NavItems.jsx";
import { useState } from "react";

export default function Header({ isPublic }) {
	const [showDropdown, setShowDropdown] = useState(false);

	const handleDropdownToggle = () => {
		setShowDropdown(!showDropdown);
	};
	const { user, setUser, ready, logout, authenticated } = useUserContext();
	function delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	if (!ready) {
		return (
			<>
				<Loader />
			</>
		);
	}

	// if (!user && ready) {
	// 	const callbackurl = window.location.pathname;
	// 	// console.log(callbackurl);
	// 	return <Navigate to={"/login?callback=" + callbackurl} />;
	// }
	// if (user && ready && !user.verified) {
	// 	const callbackurl = window.location.pathname;
	// 	// console.log(callbackurl);
	// 	return <Navigate to={"/verify?callback=" + callbackurl} />;
	// }
	// if (user && ready && user.verified)
	// 	return (
	// 		<>
	// 			<header className="flex justify-around bg-gray-100 mb-2">
	// 				<Link to={"/dashboard"} className="flex items-center gap-1">
	// 					<svg
	// 						xmlns="http://www.w3.org/2000/svg"
	// 						fill="none"
	// 						viewBox="0 0 24 24"
	// 						strokeWidth={1.5}
	// 						stroke="currentColor"
	// 						className="w-8 h-8 -rotate-90">
	// 						<path
	// 							strokeLinecap="round"
	// 							strokeLinejoin="round"
	// 							d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
	// 						/>
	// 					</svg>
	// 					<span className="font-bold text-xl">Get-Me-Through</span>
	// 				</Link>

	// 				<div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
	// 					<div>
	// 						<Link to={"/events"} className="flex items-center gap-1">
	// 							<span className="">Events</span>
	// 						</Link>
	// 					</div>
	// 					<div className="border-l border-gray-300"></div>
	// 					<div>
	// 						<Link to={"/contact"} className="flex items-center gap-1">
	// 							<span className="">Contact</span>
	// 						</Link>
	// 					</div>
	// 					<div className="border-l border-gray-300"></div>
	// 					<div>
	// 						<Link to={"/about"} className="flex items-center gap-1">
	// 							<span className="">About Us</span>
	// 						</Link>
	// 					</div>
	// 					{user.role === "admin" && (
	// 						<>
	// 							<div className="border-l border-gray-300"></div>
	// 							<div>
	// 								<Link to={"/emails"} className="flex items-center gap-1">
	// 									<span className="">Email Logs</span>
	// 								</Link>
	// 							</div>
	// 						</>
	// 					)}
	// 				</div>

	// 				<div className="flex gap-2 rounded-full">
	// 					<Link
	// 						to={user ? "/account" : "/login"}
	// 						className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
	// 						<svg
	// 							xmlns="http://www.w3.org/2000/svg"
	// 							fill="none"
	// 							viewBox="0 0 24 24"
	// 							strokeWidth={1.5}
	// 							stroke="currentColor"
	// 							className="w-6 h-6">
	// 							<path
	// 								strokeLinecap="round"
	// 								strokeLinejoin="round"
	// 								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
	// 							/>
	// 						</svg>

	// 						<div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
	// 							<svg
	// 								xmlns="http://www.w3.org/2000/svg"
	// 								viewBox="0 0 24 24"
	// 								fill="currentColor"
	// 								className="w-6 h-6 relative top-1">
	// 								<path
	// 									fillRule="evenodd"
	// 									d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
	// 									clipRule="evenodd"
	// 								/>
	// 							</svg>
	// 						</div>

	// 						{!!user && <div>{user.name || user.email}</div>}
	// 					</Link>

	// 					{user && (
	// 						<div>
	// 							<button
	// 								className="rounded-full bg-black hover:bg-gray-700 "
	// 								onClick={async () => {
	// 									let config = {
	// 										method: "post",
	// 										maxBodyLength: Infinity,
	// 										url: "/api/auth/logout",
	// 										headers: {
	// 											"Content-Type": "application/json",
	// 										},
	// 									};
	// 									try {
	// 										const response = await axios.request(config);
	// 										toast.success("Successfully Logged Out");
	// 										await delay(3000);
	// 										setUser(null);
	// 									} catch (error) {
	// 										console.error(error);
	// 										let errorData = error.response
	// 											? error.response.data.message
	// 											: "An unexpected error occured!!";
	// 										toast.error(errorData);
	// 									}
	// 								}}>
	// 								Logout
	// 							</button>
	// 							{/* <Link to={"/logout"}>
	// 								<button className="rounded-full bg-black hover:bg-gray-700 ">
	// 									Logout
	// 								</button>
	// 							</Link> */}
	// 						</div>
	// 					)}
	// 				</div>
	// 			</header>
	// 			<hr className=" mb-5" />
	// 			<div className="">
	// 				<Toaster position="bottom-right" reverseOrder={true} />
	// 			</div>
	// 		</>
	// 	);

	return (
		<>
			<header className="w-full border-b">
				<div className="wrapper flex items-center justify-between">
					<Link href="/" className="w-36">
						<img
							src="/assets/images/logo.svg"
							width={128}
							height={38}
							alt="Evently logo"
						/>
					</Link>

					<nav className="">
						<NavItems />
					</nav>

					<div className="flex w-32 justify-end gap-3">
						{!authenticated && (
							<Link
								to="/login"
								className="text-white bg-indigo-600 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-red-400 focus:outline-none">
								Login
							</Link>
						)}
						{authenticated && (
							<div className="flex justify-end gap-3 relative">
								{/* Logout button */}
								<button
									onClick={handleDropdownToggle}
									className="text-white bg-black hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:hover:bg-red-400 focus:outline-none relative">
									Logout
									{/* Dropdown arrow */}
									<span className="ml-2">&#9660;</span>
								</button>

								{/* Dropdown content */}
								{showDropdown && (
									<div className="absolute right-0 mt-11 w-32 bg-black shadow-md rounded-lg text-left">
										<Link
											to="/profile"
											className="block px-4 py-2 text-sm text-white">
											Profile
										</Link>
										<Link
											to="/settings"
											className="block px-4 py-2 text-sm text-white">
											Settings
										</Link>
										<button
											onClick={logout}
											className="block px-4 py-2 text-sm text-red-500">
											Logout
										</button>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</header>
			{isPublic && <Outlet />}
		</>
	);
}
