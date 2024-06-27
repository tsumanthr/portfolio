import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const formInitialDetails = {
    from_name: '',
    email_id: '',
    message: '',
    phone_number: ''
  };

  const validationSchema = Yup.object().shape({
    from_name: Yup.string().required('Name is required'),
    email_id: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
    phone_number: Yup.string()
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
        from_name: values.from_name,
        email_id: values.email_id,
        message: values.message,
        phone_number: values.phone_number
      };

      const result = await emailjs.send(
        'service_fb5ddfd', // Replace with your service ID
        'template_54u4l19', // Replace with your template ID
        templateParams,
        'Ywoq1NzUD_xt5kH8z' // Replace with your EmailJS user ID (API key)
      );
 
      console.log('Email sent successfully:', result);
      setStatus({ success: true, message: 'Message sent successfully' });
      resetForm(); // Reset form fields after successful submission,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
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
      id='connect'
    >
      <h2 className="mb-4">Get in Touch</h2>
      <form onSubmit={formik.handleSubmit} className="animated-form" style={{ overflowX: 'hidden' }}>
        <motion.input
          type="text"
          name="from_name"
          value={formik.values.from_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Name"
          className={`form-control ${formik.touched.from_name && formik.errors.from_name ? 'is-invalid' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
        />
        {formik.touched.from_name && formik.errors.from_name && (
          <div className="invalid-feedback">{formik.errors.from_name}</div>
        )}

        <motion.input
          type="number"
          name="phone_number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Phone Number"
          className={`form-control ${formik.touched.phone_number && formik.errors.phone_number ? 'is-invalid' : ''}`}
          style={{ overflow: 'hidden' }}
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
          pattern="[0-9]{10}" 
        />
        {formik.touched.phone_number && formik.errors.phone_number && (
          <div className="invalid-feedback">{formik.errors.phone_number}</div>
        )}

        <motion.input
          type="email"
          name="email_id"
          value={formik.values.email_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your Email"
          className={`form-control ${formik.touched.email_id && formik.errors.email_id ? 'is-invalid' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
        />
        {formik.touched.email_id && formik.errors.email_id && (
          <div className="invalid-feedback">{formik.errors.email_id }</div>
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
