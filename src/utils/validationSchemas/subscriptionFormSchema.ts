import { object } from 'yup';
import { emailValidation, nameValidation } from '.';

export const subscriptionFormValidationSchema = object().shape({
  name: nameValidation(),
  email: emailValidation(),
});
