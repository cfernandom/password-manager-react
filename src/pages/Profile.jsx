import PasswordInfo from '../components/PasswordInfo'
import FormInput from '../components/FormInput'
import { useState } from 'react'
import ButtonApp from '../components/ButtonApp'
import '../stylesheets/Profile.css'

export function Profile () {
    const [values, setValues] = useState({
        search: ''
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className='profile-main-container'>
            <div className='profile-container'>
                <h1>PASSNAGER</h1>
                <FormInput
                    className = 'profile-search'
                    showPassword = {false}
                    name = 'search'
                    type = 'text'
                    label = 'Search'
                    required = { false }
                    onChange={onChange}
                />
                <PasswordInfo
                    passwordTitle='Facebook'
                    password='HOLAMUNDO'
                />
                <PasswordInfo
                    passwordTitle='Facebook'
                    password='HOLAMUNDO'
                />
                <PasswordInfo
                    passwordTitle='Facebook'
                    password='HOLAMUNDO'
                />
                <PasswordInfo
                    passwordTitle='Facebook'
                    password='HOLAMUNDO'
                />
                <div className='profile-btn-box'>
                    <ButtonApp
                        className='new-pass-btn'
                        text='New Password'
                        styleBtn={true}
                    />
                    <ButtonApp
                        text='Logout'
                        styleBtn={false}
                    />
                </div>
            </div>
        </div>
    )
}
