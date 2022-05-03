import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddBlog from '../Components/AddBlog';
import Blog from '../Components/Blog';
import BlogSearch from '../Components/BlogSearch';
import PruebaAdmin from '../Components/PruebaAdmin';
import ResultsRecipes from '../Components/ResultsRecipes';
import SideMenu from '../Components/SideMenu';




const AdminRoutes = () => {
    return (
        <div className='dash_container'>
            <div className='dash_menu'>
                <SideMenu />
            </div>
            <div className='dash_routes'>
                <Routes>
                    <Route path="/home" element={<PruebaAdmin />} />
                    <Route path="/*" element={<Navigate to="/home" />} />
                    <Route path='/results/:query' element={<ResultsRecipes />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/add' element={<AddBlog />} />
                    <Route path='/blog/search/:search' element={<BlogSearch />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminRoutes;