import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/home' >Home</Link>
            <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
            <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
            </div>
        </div >
    );
};

export default Header;