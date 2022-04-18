import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Components/Dashboard'
import LandingPage from '../Components/LandingPage'

const AppRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default AppRoutes
