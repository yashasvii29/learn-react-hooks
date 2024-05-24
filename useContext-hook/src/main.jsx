import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // second step - providing the context
  // ContextProvider have been imported from AppContext file
  <ContextProvider>
    <App />
  </ContextProvider>,
)
// provide the context to the app component so now all the components inside the app component can access the context data now we can use this context in our components  