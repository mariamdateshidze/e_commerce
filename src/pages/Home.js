import { useEffect, useState } from "react";
import { useQuery } from "react-query"
import { Link, useSearchParams } from "react-router-dom"
import {BsSearch } from 'react-icons/bs';
import apiRequest from "./apiRequest"
import Page from './Page'
import { useTranslation } from 'react-i18next';



export default function Home(){
    const { t, i18n } = useTranslation();
    const { data} = useQuery('products', () => apiRequest('GET', 'products'));
    
   const [filter, setFilter] = useState("");


   const searchText = (event) => {
        setFilter(event.target.value);
   }
    
   let dataSearch = (data|| []).filter(item =>{
     return Object.keys(item).some(key => 
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
   })
    return(
        <Page>             
            <div className="container">
                
                   
                    <div className="search">
                        <label>  <span className='icons'><BsSearch /></span></label>
                        <input 
                        type="text" placeholder={t('search')} value={filter}
                        onChange = {searchText.bind(this)} />

                    </div>
                   
               
            </div>
            

            <section className="products-blocks container">
                {
                     (dataSearch || []).map(item => (
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

