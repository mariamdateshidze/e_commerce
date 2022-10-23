import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import apiRequest from "./apiRequest";
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import Page from "./Page";
import  Button  from '../components/Button.js'
import {motion} from '../../node_modules/framer-motion/dist/framer-motion';

export default function Product(){
  const params = useParams();
  const { productId } = params;
  const { data, isLoading } = useQuery(['product', productId], () => apiRequest('GET', `products/${productId}`));
  const { t, i18n } = useTranslation();

if (isLoading) {
  return <div>
    Loading...
  </div>
}

return(
  <motion.div
      className="product"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
  <>
   <Page>
     <section className="products-blocks one-prod container">
        
        <div className="white-block single" key={data.id}>                           
            <img
                className="item-img one-item"
                src={data.image}
            />
        </div>
        
        <div className="description">
              <h5 className="title product-title"> {data.title}$</h5>
              <h6 className="category product_category">category: {data.category}</h6>
              <p className="prod-desc">
                  {data.description}
              </p>
              <h6 className="price prod-price"> {data.price}$</h6>
              <div className="like-btn">
                  <Button></Button>
              </div>
        </div> 
      
      </section>
  </Page>
  </>
  </motion.div>
  )  

}


