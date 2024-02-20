import './ButtonApp.css'
import PropTypes from 'prop-types'

function ButtonApp ({ text, styleBtn, functionality }) {
    return (
        <button className={styleBtn ? 'main' : 'secondary'} onClick={functionality}>
            { text }
        </button>
    )
}

ButtonApp.propTypes = {
    text: PropTypes.string,
    styleBtn: PropTypes.bool,
    functionality: PropTypes.func
}

export default ButtonApp
