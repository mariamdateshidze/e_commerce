import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
   
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
