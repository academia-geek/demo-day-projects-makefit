import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../Components/LandingPage'
import Login from '../Components/Login'
import Register from '../Components/Register'

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes