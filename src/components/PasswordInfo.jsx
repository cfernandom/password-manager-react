import eyeIcon from '../images/icon-eye.png'
import editIcon from '../images/icon-edit.png'
import copyIcon from '../images/icon-copy.png'
import '../stylesheets/PasswordInfo.css'

function PasswordInfo () {
    return (
        <div className='password-container'>
            <div className='password-text'>
                <h2>Password Title</h2>
                <p>**********</p>
            </div>
            <div className='password-icons'>
                <div className='icon-pass'>
                    <img className='icon-logo' src={eyeIcon} alt='icon-eye' />
                </div>
                <div className='icon-pass'>
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

export default PasswordInfo
