import PropTypes from 'prop-types'
import { useState } from 'react'
import './FormInput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, type, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    const containerClassName = type === 'checkbox' ? 'formInput__container--inline' : 'formInput__container'
    const inputClassName = type === 'checkbox' ? 'formInput__input--checkbox' : 'formInput__input'

    return (
        <div className = {containerClassName}>
            <label className='formInput__label'>{label}</label>
            <input className={inputClassName}
                {...inputProps}
                type= {type}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === 'passwordConfirmation' && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span className='formInput__text--error'>{errorMessage}</span>
        </div>
    )
}

FormInput.propTypes = {
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    id: PropTypes.number,
    type: PropTypes.string
}

export default FormInput
