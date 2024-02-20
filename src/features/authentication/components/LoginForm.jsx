import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonApp from '../../../components/ButtonApp'
import FormInput from '../../../components/FormInput'
import useAuth from '../hooks/useAuth'
import '../../../stylesheets/LoginForm.css'

function LoginForm () {
    const auth = useAuth()
    const goTo = useNavigate()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await auth.login(values.email, values.password)
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const [showPass, setShowPass] = useState(false)

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    useEffect(() => {
        if (auth.isLoggedIn) {
            goTo('/profile')
        }
    }, [auth.isLoggedIn])

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
                <ButtonApp className='login-btn' text='Login' styleBtn={true}/>
            </form>
        </div>
    )
}

export default LoginForm
