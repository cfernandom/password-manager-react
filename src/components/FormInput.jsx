import PropTypes from 'prop-types'
import { useState } from 'react'
import './formInput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div className='formInput'>
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === 'confirmPassword' && setFocused(true)
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
    id: PropTypes.number
}

export default FormInput
