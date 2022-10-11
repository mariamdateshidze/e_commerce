import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import apiRequest from "./apiRequest";
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import Page from "./Page";

export default function Product(){
  const params = useParams();
  const { productId } = params;
  const { data, isLoading } = useQuery(['product', productId], () => apiRequest('GET', `products/${productId}`));
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

if (isLoading) {
  return <div>
    Loading...
  </div>
}

function increment() {
  //setCount(prevCount => prevCount+=1);
  setCount(function (prevCount) {
    return (prevCount += 1);
  });
}

function decrement() {
  setCount(function (prevCount) {
    if (prevCount > 0) {
      return (prevCount -= 1); 
    } else {
      return (prevCount = 0);
    }
  });
}

return(
  <>
   <Page>
     <section className="products-blocks container">
        {
          <div className="white-block single" key={data.id}>                           
                  <img
                      className="item-img one-item"
                      src={data.image}
                  />
          </div>
        }   

        <div className="description">
              <h5 className="title product-title"> {data.title}$</h5>
              <h6 className="category product_category">category: {data.category}</h6>
              <p className="prod-desc">
                  {data.description}
              </p>
              <h6 className="price prod-price"> {data.price}$</h6>
              <div className="cart">
                  <div className="range">
                    <button className="plus" onClick={increment}>+</button>
                    <h1  className=" count">{count}</h1>
                    <button  className="plus minus" onClick={decrement}>-</button>
                  </div>
                  <button className="submit-form">{t('addcart')} </button>     
              </div>
        </div> 
      
      </section>
  </Page>
  </>
 
   
  )  
}