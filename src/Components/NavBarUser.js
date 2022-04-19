import React from 'react'
import { Link } from 'react-router-dom'

const NavBarUser = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/blog/add">Agregar entrada el blog</Link>
        </div>
    )
}

export default NavBarUser