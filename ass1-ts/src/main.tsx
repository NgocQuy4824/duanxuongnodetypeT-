
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { ShoppingContextProvider } from './contexts/ShoppingContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(

  <ShoppingContextProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>  
    </QueryClientProvider>
  </ShoppingContextProvider>

)
