import PropTypes from 'prop-types'
import { useState } from 'react'
import '../stylesheets/LoginForm.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, showPassword, errorMessage, onChange, id, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div className = {showPassword ? 'show-password' : 'formInput'}>
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === 'passwordConfirmation' && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

FormInput.propTypes = {
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    id: PropTypes.number,
    showPassword: PropTypes.bool
}

export default FormInput
