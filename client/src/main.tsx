import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Toaster} from "react-hot-toast";
import { Provider } from 'react-redux'
import store from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster
      position='bottom-left'
      toastOptions={{
        success: { duration: 3000},
        error: { duration: 3000}
      }}
    />
  </BrowserRouter>
   
)
