import './wdyr'

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { firebase, FieldValue } from './lib/firebase'
import FirebaseContext from './context/firebase'

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase, FieldValue }}>
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
