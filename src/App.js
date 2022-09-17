import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
