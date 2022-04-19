import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Components/Dashboard'
import { ResultsRecipes } from '../Components/ResultsRecipes'
// import Prueba from '../Components/Prueba'

const DashboardRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/home' element={<Dashboard />} />
				<Route path='/results/:query' element={<ResultsRecipes />} />
				<Route path='*' element={<Navigate to='/home' />} />
			</Routes>
		</div>
	)
}

export default DashboardRoutes
