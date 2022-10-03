import React from 'react';
import { useFormik } from 'formik';
import Page from './Page'


const validate = (values) => {
    const errors = {};

        
    if (!values.firstName) {
        errors.firstName = 'First name is required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'First name is required';
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
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Page>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
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
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <label htmlFor="email">Email Address</label>
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
            <button type="submit">Submit</button>
        </form>
    </Page>
  );
};

export default Signup;