import { useState, useEffect } from 'react'
import FormInput from '../../../components/FormInput'
import ButtonApp from '../../../components/ButtonApp'
import '../../../stylesheets/RegisterForm.css'

const RegisterForm = () => {
    // const { auth } = useAuth()
    const [values, setValues] = useState({
        email: '',
        password: '',
        passwordConfirmation: ''
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
        console.log(generatePassword)
        setValues({ ...values, password: generatedPassword })
    }

    useEffect(() => {
        const passwordInput = document.querySelector('.password-register input')
        if (passwordInput) {
            passwordInput.value = values.password
        }
    }, [values.password])

    return (
        <div className="container-register">
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
                    pattern = '/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/'
                    errorMessage = 'It should contains a number, uppercase, lowercase, symbol with 8 min length'
                    required = { true }
                    onChange={onChange}
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
                    <ButtonApp text='Generate Password' styleBtn={false}/>
                </div>
                <FormInput
                    className = 'password-register-confirm'
                    showPassword = {false}
                    name = 'password'
                    type = { showPass ? 'text' : 'password' }
                    label = 'Confirm Master Password'
                    pattern = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'
                    required = { true }
                    onChange={onChange}
                />
                <ButtonApp text='Sign Up' styleBtn={true} functionality={handleGeneratePassword}/>
            </form>
            <ButtonApp text='Go Back' styleBtn={false}/>
        </div>
    )
}

export default RegisterForm
