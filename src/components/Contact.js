import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const formInitialDetails = {
    fullName: '',
    email: '',
    message: '',
    phoneNumber: ''
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
  });

  const formik = useFormik({
    initialValues: formInitialDetails,
    validationSchema,
    onSubmit: handleSubmit
  });

  async function handleSubmit(values, { resetForm }) {
    setButtonText('Sending...');
    try {
      const templateParams = {
        fullName: values.fullName,
        email: values.email,
        message: values.message,
        phoneNumber: values.phoneNumber
      };

      const result = await emailjs.send(
        'service_gvsj81s', // Replace with your service ID
        'template_o35rt3g', // Replace with your template ID
        templateParams,
        'EhuAcs_wzpdUIGpK7' // Replace with your EmailJS user ID (API key)
      );

      console.log('Email sent successfully:', result);
      setStatus({ success: true, message: 'Message sent successfully' });
      resetForm(); // Reset form fields after successful submission
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
    setButtonText('Send');
  }

  return (
    <motion.div
      className="animated-contact-form"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4">Get in Touch</h2>
      <form onSubmit={formik.handleSubmit} className="animated-form" style={{ overflowX: 'hidden' }}>
        <motion.input
          type="text"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Name"
          className={`form-control ${formik.touched.fullName && formik.errors.fullName ? 'is-invalid' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="invalid-feedback">{formik.errors.fullName}</div>
        )}

        <motion.input
          type="number"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Phone Number"
          className={`form-control ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'is-invalid' : ''}`}
          style={{ overflow: 'hidden' }}
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
          pattern="[0-9]{10}" 
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className="invalid-feedback">{formik.errors.phoneNumber}</div>
        )}

        <motion.input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Email"
          className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="invalid-feedback">{formik.errors.email}</div>
        )}

        <motion.textarea
          rows="5"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Message"
          className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        {formik.touched.message && formik.errors.message && (
          <div className="invalid-feedback">{formik.errors.message}</div>
        )}

        <motion.button
          type="submit"
          className="btn btn-primary"
          disabled={formik.isSubmitting}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {buttonText}
        </motion.button>

        {status.message && (
          <p className={status.success ? 'text-success' : 'text-danger'}>{status.message}</p>
        )}
      </form>
    </motion.div>
  );
};

export default Contact;
