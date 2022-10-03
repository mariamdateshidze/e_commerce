import { useState } from "react";
import { useQuery } from "react-query"
import { Link, useSearchParams } from "react-router-dom"
import apiRequest from "./apiRequest"
import Page from './Page'

export default function Home(){
    const { data } = useQuery('products', () => apiRequest('GET', 'products'));

    return(
        <Page>
               
            <section className="products-blocks container">
                {
                     (data || []).map(item => (
                        <div className="white-block" key={item.id}>
                            
                            <Link to={`products/${item.id}`}>
                                <img
                                    className="item-img"
                                    src={item.image}
                                />
                            </Link>
                            <Link to={`products/${item.id}`}>
                                <h5>{item.title}</h5>
                            </Link>
                        
                            <h6 className="category">category: {item.category}</h6>
                            <h6 className="price"> {item.price}$</h6>
                           
                        </div>
                    ))
                }    
            </section> 
        </Page>

    
            

    )   
}