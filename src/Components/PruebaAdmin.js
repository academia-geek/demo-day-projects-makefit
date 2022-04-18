import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAsync } from '../Redux/actions/actionLogin';

const PruebaAdmin = () => {

  const dispatch = useDispatch();
  const navigate  = useNavigate();
  //cerrar sesion
  const handleLogout = () => {
    dispatch(logoutAsync())
    navigate("/login")
}

  return (
    <div>
      <div>PruebaAdmin</div>
      <button onClick={() => handleLogout()}>LogOut</button>
    </div>
  )
}

export default PruebaAdmin