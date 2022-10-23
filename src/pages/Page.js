
import { useTranslation } from 'react-i18next';
import {BsPersonCircle } from 'react-icons/bs';
import {AiFillShop  } from 'react-icons/ai';
import { Link} from "react-router-dom"
import {Routes, Route, useNavigate} from 'react-router-dom';
import {motion} from '../../node_modules/framer-motion/dist/framer-motion';

export default function Page( { children }) {
    const { t, i18n } = useTranslation();

    return <>
        <motion.div
        className="product"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        ></motion.div>

            <header className="container">
                <div className="header-content">
                    <Link to={`/home`}>
                         <h3>{t('store')}</h3>
                    </Link>
                    
                    <div className="small-icons">
                        <div className="header-icons">
                        <Link to={`/`}>
                                 <span className='icons' id='person'><BsPersonCircle/></span>
                        </Link>
                           
                        </div>
                        <div className="header-icons">
                            <Link to={`/home`} className='all-items'>
                                <span className='icons'><AiFillShop /></span>
                                <span>{t('collection')}</span>
                            </Link>
                        </div>
                    
                        <div>
                            <button onClick={() => i18n.changeLanguage('ka')} className="language">KA</button>
                            <button onClick={() => i18n.changeLanguage('en')} className="language">ENG</button>
                        </div>
                    </div>
                </div>
            </header>
       
      {children}

      <footer className="container">
                <div className="footer-content">
                     {t('rights')}    
                </div>
        </footer>

  </>
}