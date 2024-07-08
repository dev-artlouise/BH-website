import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx'

import { ThemeProvider } from '@mui/material'
import theme from './theme.js'

import router from './router/index.jsx'

import { RouterProvider } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>


)
