import * as yup from 'yup';

const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const contactSchema = yup.object().shape({
    firstName : yup.string().required('This field is required'),
    lastName : yup.string().notRequired(),
    email : yup.string().email('Must be valid email'),
    phone : yup.string().required('Phone number is required').matches(phone, 'This is not a valid phone number')
});