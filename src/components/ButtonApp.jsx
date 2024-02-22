import './ButtonApp.css'
import PropTypes from 'prop-types'

function ButtonApp (props) {
    const { text, styleBtn, functionality, type, ...inputProps } = props
    return (
        <button
            {...inputProps}
            type={type}
            className={styleBtn ? 'main' : 'secondary'}
            onClick={functionality}>
            { text }
        </button>
    )
}

ButtonApp.propTypes = {
    text: PropTypes.string,
    styleBtn: PropTypes.bool,
    functionality: PropTypes.func,
    type: PropTypes.string

}

ButtonApp.defaultProps = {
    text: 'Button',
    styleBtn: true,
    functionality: () => { console.log('ButtonApp') },
    type: 'button'
}

export default ButtonApp
