import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DataContextProvider from "./assets/Context/DataContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DataContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataContextProvider>
)
