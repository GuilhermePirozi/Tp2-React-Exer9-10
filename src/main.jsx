import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Produtos from './ApiRedenrizar'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produtos />
  </StrictMode>,
)
