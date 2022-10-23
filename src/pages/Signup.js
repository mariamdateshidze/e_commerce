import React from 'react';
import { useFormik } from 'formik';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {motion} from '../../node_modules/framer-motion/dist/framer-motion';

const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'First name is required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'First name is required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required';
  } else if (values.lastName.length < 2) {
      errors.lastName = 'Last name is required';
  }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;

  };

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      navigateToHome();
    },
  });
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  return  <>
    <motion.div
        className="product"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>
        <header className="container">
          <div className="header-content">
              <h3>{t('store')}</h3>
              
              <div className="small-icons">
                  <div>
                      <button onClick={() => i18n.changeLanguage('ka')} className="language">KA</button>
                      <button onClick={() => i18n.changeLanguage('en')} className="language">ENG</button>
                  </div>
              </div>
          </div>
        </header>
   
        <form className='container formik' onSubmit={formik.handleSubmit}>
          <div className='form-field'>
            <label htmlFor="firstName">{t('name')}</label>
              <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
              />
              {
              formik.errors.firstName && <div style={{color: 'red'}}>{formik.errors.firstName}</div>
              }
          </div>
           <div  className='form-field'>
              <label htmlFor="lastName">{t('lastname')}</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {
                formik.errors.lastName && <div style={{color: 'red'}}>{formik.errors.lastName}</div>
                }
           </div>
           <div  className='form-field'>
              <label htmlFor="email">{t('email')}</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                {
                    formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>
                
                }
           </div>
           
            <button className='submit-form' type="submit">{t('submit')}</button>  
        </form>
 
   </>
};

export default Signup;