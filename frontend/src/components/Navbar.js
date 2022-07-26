import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/auth';
import Alert from './Alert'
import PropTypes from 'prop-types'


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLink = (
        <a href="#!" className='navbar__top__auth__link' onClick={logout}>Logout</a>
    );

    const guestLink = (
        <Fragment>
            <Link to="/login" className="navbar__top__auth__link">Login</Link>
            <Link to="/singup" className="navbar__top__auth__link">Singup</Link>
        </Fragment>
    )
    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar__top">
                    <div className="navbar__top__logo">
                        <Link to="/" className="navbar__top__logo__link">Realest Estate</Link>
                    </div>
                    <div className="navbar__top__auth">
                        {!loading && (<Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>)}
                    </div>
                </div>
                <div className='navbar__bottom'>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/'>Home</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/listings'>Listings</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/about'>About</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/contact'>Contact</NavLink>
                    </li>
                </div>
            </nav>
            <Alert />
        </Fragment>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout}) (Navbar)
