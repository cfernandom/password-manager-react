import { useState } from 'react'
import FormInput from '../../../components/FormInput'
import ButtonApp from '../../../components/ButtonApp'
import '../../../stylesheets/RegisterForm.css'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const auth = useAuth()
    const goTo = useNavigate()

    const [values, setValues] = useState({
        email: '',
        password: '',
        passwordConfirmation: ''
    })
    const [showPass, setShowPass] = useState(false)

    const handleSubmit = async (e) => {
        const form = document.querySelector('form')
        e.preventDefault()
        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }
        console.log('Registering...')

        const successfulRegistration = await auth.register(
            values.email,
            values.password,
            values.passwordConfirmation
        )

        if (successfulRegistration) {
            auth.resetError()
            alert('Registration successful!')
            goTo('/')
            return
        }
        alert('Registration failed!')
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    const generatePassword = () => {
        const length = 8
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'
        let password = ''
        for (let i = 0; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * charset.length))
        }
        return password
    }

    const handleGeneratePassword = () => {
        const generatedPassword = generatePassword()
        setValues({ ...values, password: generatedPassword })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <FormInput
                    className = 'email-register'
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
                    className = 'password-register'
                    showPassword = {false}
                    name = 'password'
                    type = { showPass ? 'text' : 'password' }
                    label = 'Master Password'
                    pattern = '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
                    errorMessage = 'It should contains a number, uppercase, lowercase, symbol with 8 min length'
                    required = { true }
                    onChange={onChange}
                    value={values.password}
                />
                <div className='register-button-box'>
                    <FormInput
                        className = 'password-checkbox'
                        showPassword = {true}
                        name = 'password'
                        type = 'checkbox'
                        label = 'Show Password'
                        required = { false }
                        onChange={() => { toggleShowPass() }}
                    />
                    <ButtonApp text='Generate Password' styleBtn={false} functionality={handleGeneratePassword} />
                </div>
                <FormInput
                    className = 'password-register-confirm'
                    showPassword = {false}
                    name = 'passwordConfirmation'
                    type = { showPass ? 'text' : 'password' }
                    label = 'Confirm Master Password'
                    pattern = {values.password}
                    errorMessage = 'It should be the same as the master password!'
                    required = { true }
                    onChange={onChange}
                />
                <ButtonApp text='Sign Up' styleBtn={true} functionality={handleSubmit} type='submit'/>
            </form>
            {auth.error && <div className='error-message'>{auth.error}</div>}
            <ButtonApp text='Go Back' styleBtn={false}/>
        </>
    )
}

export default RegisterForm
