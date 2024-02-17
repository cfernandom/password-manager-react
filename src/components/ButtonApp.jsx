import './ButtonApp.css'
import PropTypes from 'prop-types'

function ButtonApp ({ text, styleBtn }) {
    return (
        <button className={styleBtn ? 'main' : 'secondary'}>
            { text }
        </button>
    )
}

ButtonApp.propTypes = {
    text: PropTypes.string,
    styleBtn: PropTypes.bool
}

export default ButtonApp
