import { MIN_PASSWORD_LENGTH } from './const'

export default function getSpectedValidationSchema(values) {
  return {
    username: [
      [value => !isEmpty(value), '*Les informations ne sont pas valide'],
      [value => isUsername(value), '*Les informations ne sont pas valide'],
    ], 
    phone: [
      [value => !isEmpty(value), '*Les informations ne sont pas valide'],
      [value => isNumber(value), '*Numéro de téléphone non valide'],
    ],
    password: [
      [value => !isEmpty(value),'*Les informations ne sont pas valide'],
      [
        value => value.length >= MIN_PASSWORD_LENGTH, 
        `${MIN_PASSWORD_LENGTH} numéros demandé !`,
      ],
    ],
    passwordConfirmation: [
      [value => !isEmpty(value), '*Les informations ne sont pas valide'],
      [value => value === values.password, '*Le code n\'est pas identique'],
    ],
    consent: [
      [value => value === true, '*Vous devez accépter les Termes et Conditions'],
    ]
  }
}

function isEmpty(value) {
  return !value || !value.trim()
}

function isUsername(value) {
  const USERNAME_REGEXP = /^[A-Za-z0-9]*$/
  return USERNAME_REGEXP.test(value)
}

function isNumber(value) {
  const NUMBER_REGEXP = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  return NUMBER_REGEXP.test(value)
}