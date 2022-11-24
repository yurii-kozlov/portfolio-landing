/* eslint-disable max-len */
import * as yup from 'yup';

export const schema = yup.object().shape({
  contactName: yup.string()
    .required('This field is required.')
    .min(2, 'Please enter at least 2 characters.'),
  contactEmail: yup.string()
    .email('Please enter a valid email address.')
    .required('This field is required.'),
  contactMessage: yup.string()
    .required('This field is required')
    .min(15, 'Please enter your message. It should have at least 15 characters.'),
});
