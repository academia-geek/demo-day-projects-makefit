import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../Redux/actions/actionLogin';

const NavBarUser = () => {
    const dispatch = useDispatch()
	const navigate = useNavigate()
	//cerrar sesion
	const handleLogout = () => {
		dispatch(logoutAsync())
		navigate('/landingpage')
	}
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/blog/add">Agregar entrada el blog</Link>
            <button style={{width: "150px"}}onClick={() => handleLogout()}>LogOut</button>
        </div>
    )
}

export default NavBarUser