import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalStateProvider from './components/GlobalStateProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStateProvider>
       <App />
    </GlobalStateProvider>
  </StrictMode>,
)
