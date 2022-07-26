import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setAlert } from '../actions/alert'
import { signup } from '../actions/auth'

const SingUp = ({ signup, isAuthenticated, setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            setAlert("Password do not match", "error")
        }
        signup(name, email, password, password2)
    }
    if (isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="auth">
            <Helmet>
                <title>Realest Estate - Signup</title>
                <meta name="description" content="singup page" />
            </Helmet>
            <h1 className="auth__title">Sing Up</h1>
            <p className="auth__lead">Create your Account</p>
            <form className="auth__form" onSubmit={e => onSubmit(e)}>
                <div className="auth__form__group">
                    <input className="auth__form__input"
                        type="text" placeholder="Name" name="name"
                        value={name} onChange={e => onChange(e)} />
                </div>
                <div className="auth__form__group">
                    <input className="auth__form__input"
                        type="email" placeholder="Email" name="email"
                        value={email} onChange={e => onChange(e)} />
                </div>
                <div className="auth__form__group">
                    <input className="auth__form__input"
                        type="password" placeholder="Password" name="password"
                        value={password} onChange={e => onChange(e)} minLength="6" />
                </div>
                <div className="auth__form__group">
                    <input className="auth__form__input"
                        type="password" placeholder="Confirm Password" name="password2"
                        value={password2} onChange={e => onChange(e)} minLength="6" />
                </div>
                <button className="auth__form__button">Register</button>
            </form>
            <p className="auth__authtext">
                Already have an account <Link className="auth__authtext__link" to="/login">Sing In</Link>
            </p>
        </div>

    )
}

SingUp.propTypes = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    setAlert: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signup, setAlert })(SingUp)
