
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Page( { children }) {
    const { t, i18n } = useTranslation();

    return <>
            <header className="container">
                <div className="header-content">
                    <h3>{t('store')}</h3>
                    
                    <div className="small-icons">
                        <div className="header-icons">
                            <span>{t('cart')}</span>
                            <FontAwesomeIcon icon="fa-regular fa-cart-shopping" />
                        </div>
                        <div className="header-icons">
                            <span>{t('favorites')}</span>
                        </div>
                        <div>
                            <button onClick={() => i18n.changeLanguage('ka')} className="language">KA</button>
                            <button onClick={() => i18n.changeLanguage('en')} className="language">ENG</button>
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
                                {t('all')}
                                </a>
                                <a className="categories" >
                                {t('electronics')}
                                </a>
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
         
      {children}

      <footer className="container">
                <div className="footer-content">
                   
                </div>
        </footer>

  </>
}