import { ValidationError } from 'yup'

interface Errors {
   [key: string]: string
}

export default function getValidationsErros(e: ValidationError): Errors {
   const ValidationErrors: Errors = {}

   e.inner.forEach(error => {
      ValidationErrors[error.path] = error.message
   })

   return ValidationErrors
}
