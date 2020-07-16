const yup = require('yup');

const nameRegExp = /^[0-9a-zA-Z-_]+$/;

const urlSchema = yup.object().shape({
  url: yup
    .string()
    .trim()
    .url('Adres url jest nieprawidłowy.')
    .required('Właściwość "url" jest wymagana.'),
  name: yup
    .string()
    .trim()
    .matches(nameRegExp, 'Nazwa zawiera niedozwolone znaki.')
    .required('Właściwość "name" jest wymagana.'),
});

module.exports = urlSchema;
