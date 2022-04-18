import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='estilos_landing'>
            <h1 className='h1_landing'>MakeFit</h1>
            <Link className="links_landing" to="/register"><h1>Register</h1></Link>
            <Link className="links_landing" to="/login"><h1>Login</h1></Link>
        </div>
    )
}

export default LandingPage