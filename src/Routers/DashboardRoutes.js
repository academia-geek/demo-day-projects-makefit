import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Prueba from '../Components/Prueba';


const DashboardRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Prueba />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
};

export default DashboardRoutes;