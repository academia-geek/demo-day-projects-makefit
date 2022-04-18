import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PruebaAdmin from '../Components/PruebaAdmin';




const AdminRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<PruebaAdmin />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
};

export default AdminRoutes;