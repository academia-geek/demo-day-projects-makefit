import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '../Components/LandingPage';
import Login from '../Components/Login';
import Register from '../Components/Register';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import loadcenter from "../Styles/Images/Recipes.gif";
import loadbottom from "../Styles/Images/loading_recipes.gif";

const AppRouters = () => {
	const [checking, setChecking] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [usuario, setUsuario] = useState('')

	useEffect(() => {
		const auth = getAuth()
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				setIsLoggedIn(true)
				setUsuario(user.email)
			} else {
				setIsLoggedIn(false)
			}
			setTimeout(function () {
				setChecking(false)
			}, 1500)
		})
	}, [setIsLoggedIn, setChecking])

	if (checking) {
		return (
			<div className='loading_container'>
				<div className='loading_center__img'>
					<img src={loadcenter} alt='loading' />
				</div>
				<div className='loading_bottom__img'>
					<img src={loadbottom} alt='loading' />
				</div>
			</div>
		)
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/landingpage'
					element={
						<PublicRoutes isAuth={isLoggedIn}>
							<LandingPage />
						</PublicRoutes>
					}
				/>

				<Route
					path='/login'
					element={
						<PublicRoutes isAuth={isLoggedIn}>
							<Login />
						</PublicRoutes>
					}
				/>

				<Route
					path='/register'
					element={
						<PublicRoutes isAuth={isLoggedIn}>
							<Register />
						</PublicRoutes>
					}
				/>

				<Route
					path='/*'
					element={
						<PrivateRoutes isAuth={isLoggedIn} email={usuario}>
							<DashboardRoutes />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouters
