import './ButtonApp.css'
import PropTypes from 'prop-types'

function ButtonApp (props) {
    const { text, functionality, type, ...inputProps } = props
    return (
        <button
            {...inputProps}
            type={type}
            onClick={functionality}
        >
            { text }
        </button>
    )
}

ButtonApp.propTypes = {
    text: PropTypes.string,
    functionality: PropTypes.func,
    type: PropTypes.string
}

ButtonApp.defaultProps = {
    text: 'Button',
    functionality: () => { console.log('ButtonApp') },
    type: 'button'
}

export default ButtonApp
