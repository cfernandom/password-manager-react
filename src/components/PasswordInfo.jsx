import eyeIcon from '../images/icon-eye.png'
import editIcon from '../images/icon-edit.png'
import copyIcon from '../images/icon-copy.png'
import '../stylesheets/PasswordInfo.css'
import PropTypes from 'prop-types'

function PasswordInfo ({ passwordTitle, password }) {
    const copyPass = document.querySelector(`.${passwordTitle} p`)
    const copyToClipboard = () => {
        navigator.clipboard.writeText(copyPass.innerText)
            .then(() => {
                alert('Password copied to clipboard')
            })
            .catch(e => alert('Error copying to clipboard', e))
    }

    return (
        <div className={`password-container ${passwordTitle}`}>
            <div className='password-text'>
                <h2>{passwordTitle}</h2>
                <p className={`${passwordTitle}-password`}>{password}</p>
            </div>
            <div className='password-icons'>
                <div className='icon-pass'>
                    <img className='icon-logo' src={eyeIcon} alt='icon-eye' />
                </div>
                <div className='icon-pass' onClick={copyToClipboard}>
                    <img className='icon-logo' src={copyIcon} alt='icon-copy' />
                </div>
                <div className='icon-pass'>
                    <img className='icon-logo' src={copyIcon} alt='icon-delete' />
                </div>
                <div className='icon-pass'>
                    <img className='icon-logo' src={editIcon} alt='icon-edit' />
                </div>
            </div>
        </div>
    )
}

PasswordInfo.propTypes = {
    passwordTitle: PropTypes.string,
    password: PropTypes.string
}

export default PasswordInfo
