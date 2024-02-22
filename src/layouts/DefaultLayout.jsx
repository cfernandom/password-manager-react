import PropTypes from 'prop-types'
import './src/stylesheets/styles.css'

const DefaultLayout = ({ children }) => {
    return (
        <>
            <header>
            </header>
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout
