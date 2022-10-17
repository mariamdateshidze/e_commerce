
import { useTranslation } from 'react-i18next';
import {MdOutlineFavoriteBorder } from 'react-icons/md';
import {BsCartPlus  } from 'react-icons/bs';
import { Link} from "react-router-dom"



export default function Page( { children }) {
    const { t, i18n } = useTranslation();

    return <>
            <header className="container">
                <div className="header-content">
                    <Link to={`/home`}>
                         <h3>{t('store')}</h3>
                    </Link>
                    
                    <div className="small-icons">
                        <div className="header-icons">
                             <span className='icons'><BsCartPlus /></span>
                            <span>{t('cart')}</span>
                        </div>
                        <div className="header-icons">
                            <span className='icons'><MdOutlineFavoriteBorder /></span>
                            <span>{t('favorites')}</span>
                        </div>
                        <div>
                            <button onClick={() => i18n.changeLanguage('ka')} className="language">KA</button>
                            <button onClick={() => i18n.changeLanguage('en')} className="language">ENG</button>
                        </div>
                    </div>
                </div>
            </header>

         

            {/* <div className="container">
                <div>
                    <nav>
                        <ul>
                            <li className="categories">
                                <a className="categories"  >
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
            </div> */}
         
      {children}

      <footer className="container">
                <div className="footer-content">
                     {t('rights')}    
                </div>
        </footer>

  </>
}