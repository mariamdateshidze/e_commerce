import React from "react";
import {
    Route, 
    Routes, 
    useLocation} 
    from "react-router-dom";
import Home from '../pages/Home';
import Product from '../pages/Product';
import Signup from '../pages/Signup';
// import AnimatedRoutes from './components/AnimatedRoutes';

import {AnimatePresence} from '../../node_modules/framer-motion/dist/framer-motion';

function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/products/:productId" element={<Product />} />

             </Routes>

        </AnimatePresence>
        
    )
    
}

export default AnimatedRoutes;