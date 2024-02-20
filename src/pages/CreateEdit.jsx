import PropTypes from 'prop-types'
import FormInput from '../components/FormInput'
import ButtonApp from '../components/ButtonApp'
import CategorySelect from '../components/CategorySelect'
import UsrComment from '../components/UsrComment'
import { useState } from 'react'
import '../stylesheets/CreateEdit.css'

export default function CreateEdit ({ mode }) {
    const [values, setValues] = useState({
        email: '',
        password: '',
        text: '',
        checkbox: ''
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const [showPass, setShowPass] = useState(false)

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className='container-create-edit'>
            <h1>PASSNAGER</h1>
            {mode === 'create' ? (<h2>Create Password</h2>) : (<h2>Edit Passoword</h2>)}
            <form onSubmit={handleSubmit}>
                <FormInput
                    className = 'title-create-edit'
                    showPassword = {false}
                    name = 'title'
                    type = 'text'
                    placeholder = 'Example'
                    label = 'Title'
                    required = { true }
                    onChange={onChange}
                />
                <FormInput
                    className = 'email-create-edit'
                    showPassword = {false}
                    name = 'email'
                    type = 'email'
                    placeholder = 'example@mail.com'
                    errorMessage = 'It should be a valid email address!'
                    label = 'Email'
                    required = { true }
                    onChange={onChange}
                />
                <FormInput
                    className = 'password-create-edit'
                    showPassword = {false}
                    name = 'password'
                    type = { showPass ? 'text' : 'password'}
                    placeholder = 'Password to save'
                    pattern = '/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/'
                    errorMessage = 'It should contains a number, uppercase, lowercase, symbol with 8 min length'
                    label = 'Password'
                    required = { true }
                    onChange={() => { toggleShowPass() }}
                />
                <div className='button-box-create-edit'>
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
                    className = 'password-confirm-edit-create'
                    showPassword = {false}
                    name = 'password'
                    type = { showPass ? 'text' : 'password' }
                    placeholder = 'Password to save again'
                    label = 'Confirm Master Password'
                    pattern = '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'
                    required = { true }
                    onChange={onChange}
                />
                <FormInput
                    className = 'website-create-edit'
                    showPassword = {false}
                    name = 'website'
                    type = 'text'
                    placeholder = 'example.com'
                    label = 'Website URL'
                    required = { false }
                    onChange={onChange}
                />
                <UsrComment className='notes-create-edit' />
                <CategorySelect className='select-create-edit' />
                <ButtonApp text='Apply' styleBtn={true} />
            </form>
            <ButtonApp text='Cancel' styleBtn={false} />
        </div>
    )
}

CreateEdit.propTypes = {
    mode: PropTypes.oneOf(['create', 'edit']).isRequired
}
