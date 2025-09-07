import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import './i18n';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<img src="/ZigCheck.svg" alt="ZigCheck" />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </StrictMode>,
)
