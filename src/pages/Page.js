
import { useTranslation } from 'react-i18next';

export default function Page( { children }) {
    const { t, i18n } = useTranslation();


    return <>
            <header className="container">
                <div className="header-content">
                    <h3>{t('store')}</h3>
                    
                    <div className="small-icons">
                        <div className="header-icons">
                            <span>Cart</span>
                        </div>
                        <div className="header-icons">
                            <span>Favorites</span>
                        </div>
                        <div>
                            <button onClick={() => i18n.changeLanguage('ka')}>ka</button>
                            <button onClick={() => i18n.changeLanguage('en')}>en</button>
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
         
      {children}

      <footer className="container">
                <div className="footer-content">
                   
                </div>
        </footer>

  </>
}