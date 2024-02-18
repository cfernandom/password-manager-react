import CategorySelect from '../components/CategorySelect'
import PasswordInfo from '../components/PasswordInfo'
import UsrComment from '../components/UsrComment'
import LoginForm from '../features/authentication/components/LoginForm'

export function Profile () {
    return (
        <div>
            <LoginForm />
            <CategorySelect />
            <PasswordInfo
                passwordTitle='Facebook'
                password='HOLAMUNDO'
            />
            <UsrComment />
        </div>
    )
}
