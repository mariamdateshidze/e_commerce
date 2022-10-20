import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter,
   Route, 
   Routes, 
   useLocation} 
   from "react-router-dom";
// import Home from './pages/Home';
// import Product from './pages/Product';
// import Signup from './pages/Signup';
import './i18n'
import AnimatedRoutes from './components/AnimatedRoutes';



const queryClient = new QueryClient()

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        

         <AnimatedRoutes/>
          
        </BrowserRouter>
    </QueryClientProvider>
  );
}


export default App;
