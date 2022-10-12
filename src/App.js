import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Signup from './pages/Signup';
import './i18n'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/products/:productId" element={<Product />} />

          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
