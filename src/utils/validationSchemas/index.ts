import { string } from 'yup';

const nameRegex = /^[^\d]*$/;

export const defaultValidation = (name: string) => string().required(`${name} is required`);

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emailValidation = () =>
  string()
    .matches(emailRegex, 'Enter a valid email address e.g janedoe@gmail.com')
    .required('Email address is required');

export const nameValidation = () =>
  string().matches(nameRegex, 'Enter Valid Name').required('Name is required');
