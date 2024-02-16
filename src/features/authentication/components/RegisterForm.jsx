import { useState } from 'react'
import FormInput from '../../../components/FormInput'

const RegisterForm = () => {
    // const { auth } = useAuth()
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'example@mail.com',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            required: true
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage:
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            label: 'Password',
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            required: true
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: 'Passwords don\'t match!',
            label: 'Confirm Password',
            pattern: values.password,
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm
