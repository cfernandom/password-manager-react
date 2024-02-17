import FormInput from '../../../components/FormInput'
import '../../../stylesheets/LoginForm.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginForm () {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const [showPass, setShowPass] = useState(false)

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <div className="app-login">
            <form onSubmit={handleSubmit}>
                <FormInput
                    className = 'email-login'
                    showPassword = {false}
                    name = 'email'
                    type = 'email'
                    placeholder = 'example@mail.com'
                    label = 'Email'
                    errorMessage = 'It should be a valid email address!'
                    required = { true }
                    onChange={onChange}
                />
                <FormInput
                    className = 'password-login'
                    showPassword = {false}
                    name = 'password'
                    type = { showPass ? 'text' : 'password' }
                    label = 'Master Password'
                    required = { false }
                    onChange={onChange}
                />
                <div className='secondary-container'>
                    <FormInput
                        className = 'password-checkbox'
                        showPassword = {true}
                        name = 'password'
                        type = 'checkbox'
                        label = 'Show Password'
                        required = { false }
                        onChange={() => { toggleShowPass() }}
                    />
                    <Link to='/register' className='link-forgot-password'>
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
