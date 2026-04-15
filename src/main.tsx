import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ThemeProvider } from "flowbite-react";
import { customTheme } from "./theme/flowbiteTheme";

import "flowbite";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
