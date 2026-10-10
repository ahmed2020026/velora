import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')
if(!root) throw new Error('root Not Defined')

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
