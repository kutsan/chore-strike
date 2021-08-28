import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store'

render(
  <StrictMode>
    <Router>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ReduxProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
)
