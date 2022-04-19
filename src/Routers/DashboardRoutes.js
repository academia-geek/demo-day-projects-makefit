import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddBlog from '../Components/AddBlog'
import Blog from '../Components/Blog'
import BlogSearch from '../Components/BlogSearch'
import { Dashboard } from '../Components/Dashboard'
import { ResultsRecipes } from '../Components/ResultsRecipes'
import NavBarUser from '../Components/NavBarUser'


const DashboardRoutes = () => {
	return (
		<div>
			<NavBarUser/>
			<Routes>
				<Route path='/home' element={<Dashboard />} />
				<Route path='/results/:query' element={<ResultsRecipes />} />
				<Route path='*' element={<Navigate to='/home' />} />
				<Route path='/blog' element={<Blog/>} /> 
				<Route path='/blog/add' element={<AddBlog/>} /> 
				<Route path='/blog/search/:search' element={<BlogSearch/>} /> 
			</Routes>
		</div>
	)
}

export default DashboardRoutes
