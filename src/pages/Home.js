import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import apiRequest from "./apiRequest"
import Page from './Page'

export default function Home(){
    const { data } = useQuery('products', () => apiRequest('GET', 'products'));

    console.log(data);
    return(
        <>
            <header className="container">
                <div className="header-content">
                    <h3>Store.</h3>
                    <div className="small-icons">
                        <div className="header-icons">
                            <span>Cart</span>
                        </div>
                        <div className="header-icons">
                            <span>Favorites</span>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <div>
                    <nav>
                        <ul>
                            <li className="categories">
                                <a className="categories" >
                                all
                                </a>
                                <a className="categories" >
                                jewellry
                                </a>
                                <a className="categories" >
                                
                                </a>
                                <a className="categories" >
                               
                                </a>
                                <a className="categories">
                               
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
                            
                            {/* <Link to={'api/v1/products/${item.id}'}>
                          
                            </Link> */}
                           <img
                           className="item-img"
                                src={item.image}
                           />
                            <h5>{item.title}</h5>
                            <h6>{item.category}</h6>
                            <h5>{item.price}</h5>
                           
                        </div>
                    ))
                }    
            </section>

            <footer className="container">
                <div className="footer-content">
                   
                </div>
            </footer>

            </>
            

    )   
}