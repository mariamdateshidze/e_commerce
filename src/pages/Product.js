import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import apiRequest from "./apiRequest";
import Page from "./Page";

export default function Product(){
  const params = useParams();
  const { productId } = params;
  const { data, isLoading } = useQuery(['product', productId], () => apiRequest('GET', `products/${productId}`));

if (isLoading) {
  return <div>
    Loading...
  </div>
}

return(
  <Page>
     <section className="products-blocks container">
                  {
                      
                          <div className="white-block" key={data.id}>
                              
                            
                                  <img
                                      className="item-img"
                                      src={data.image}
                                  />
            
                              <h6 className="category">category: {data.category}</h6>
                              <h6 className="price"> {data.price}$</h6>
                            
                          </div>
                  
                  }    
              </section>
   
  </Page>
   
     
   
  )
  
}