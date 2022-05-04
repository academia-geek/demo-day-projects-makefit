import { Navigate, Route, Routes } from 'react-router-dom'
import SideMenu from '../Components/SideMenu'
import Dashboard from '../Components/Dashboard'
import Blog from '../Components/Blog'
import AddBlog from '../Components/AddBlog'
import BlogSearch from '../Components/BlogSearch'
import ResultsRecipes from '../Components/ResultsRecipes'
import { AnalyzeImg } from '../Components/AnalyzeImg'
import { DetailsRecipe } from '../Components/DetailsRecipe'
import RecipeByIngredient from '../Components/RecipeByIngredient'
import FavoriteList from '../Components/FavoriteList'
import ChatBotSpoonacular from '../Components/ChatBotSpoonacular'

const DashboardRoutes = () => {
	return (
		<div className='dash_container'>
			<div className='dash_menu'>
				<SideMenu />
			</div>
			<div className='dash_routes'>
				<Routes>
					<Route path='/home' element={<Dashboard />} />
					<Route path='/image-analyzer' element={<AnalyzeImg />} />
					<Route path='/results/:query' element={<ResultsRecipes />} />
					<Route path='/details/:id' element={<DetailsRecipe />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/blog/add' element={<AddBlog />} />
					<Route path='/blog/search/:search' element={<BlogSearch />} />
					<Route path='/recipe-by-ingredient' element={<RecipeByIngredient />} />
					<Route path='/favorite-list' element={<FavoriteList />} />
					<Route path='/chat' element={<ChatBotSpoonacular />} />
					<Route path='/*' element={<Navigate to='/home' />} />
				</Routes>
			</div>
		</div>
	)
}

export default DashboardRoutes
