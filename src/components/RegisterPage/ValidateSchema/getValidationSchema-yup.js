import Yup from 'yup'
import { MIN_PASSWORD_LENGTH } from './const'

export default function getYupValidationSchema(values) {
  return Yup.object().shape({
    username: Yup.string()
      .username('*Les informations ne sont pas valide')
      .required('Name is required!'),
    phone: Yup.string()
      .max(5, '*10 numéros demandé')
      .phone('*Les informations ne sont pas valide')
      .required('Phone is required!'),
    password: Yup.string()
      .min(MIN_PASSWORD_LENGTH, `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`)  
      .required('*Les informations ne sont pas valide'),
    passwordConfirmation: Yup.string()
      .oneOf([values.password], '*Les informations ne sont pas valide')
      .required('*Les informations ne sont pas valide'),
    consent: Yup.bool()
      .test('consent', 'You have to agree with our Terms and Conditions!', value => value === true)
      .required('You have to agree with our Terms and Conditions!'),
  })
}