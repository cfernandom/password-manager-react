import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonApp from '../../../components/ButtonApp'
import FormInput from '../../../components/FormInput'
import useAuth from '../hooks/useAuth'

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
        <>
            <form onSubmit={handleSubmit}>
                <FormInput
                    showPassword = {false}
                    name = 'email'
                    type = 'email'
                    label = 'Email'
                    errorMessage = 'It should be a valid email address!'
                    required = { true }
                    onChange={onChange}
                />
                <FormInput
                    showPassword = {false}
                    name = 'password'
                    type = { showPass ? 'text' : 'password' }
                    label = 'Master Password'
                    required = { false }
                    onChange={onChange}
                />
                <div className='form__password-options'>
                    <FormInput
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
                <div className='form__action-buttons'>
                    <ButtonApp
                        text='Login'
                        functionality={handleSubmit}
                        className='button--primary'
                    />
                    <p>Don&lsquo;t have an account?
                        <Link to='/register'> Sign up</Link>
                    </p>
                </div>
            </form>
            {auth.error && <div className='error-message'>{auth.error}</div>}
        </>
    )
}

export default LoginForm
