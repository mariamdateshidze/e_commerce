import { useState } from "react";
import { useQuery } from "react-query"
import { Link, useSearchParams } from "react-router-dom"
import apiRequest from "./apiRequest"
import Page from './Page'

import { useTranslation } from 'react-i18next';

export default function Home(){
    const { t, i18n } = useTranslation();
    const { data} = useQuery('products', () => apiRequest('GET', 'products'));

    return(
        <Page>             

            <div className="container">
                <div>
                    <nav>
                        <ul>
                            <li className="categories">
                                <a className="categories"  >
                                {t('all')}
                                </a>
                                <button className="categories" onClick={()=> filterResult('electronics')}>
                                {t('electronics')}
                                </button>
                                <a className="categories" >
                                {t('jewelery')}
                                </a>
                                <a className="categories" >
                                {t('man')}
                                </a>
                                <a className="categories">
                                {t('woman')}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
         
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
                        
                            <h6 className="category">category: {item.category} </h6>
                            <h6 className="price"> {item.price}$</h6>                           
                        </div>
                    ))
                }    
            </section> 
        </Page>

    
            

    )   
}

