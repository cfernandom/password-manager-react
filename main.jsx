import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './src/App'

createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)