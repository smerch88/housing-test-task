import * as yup from 'yup';

export const schema = condition => {
  return yup
    .object({
      name: yup
        .string()
        .trim()
        .required("Поле обов'язкове для заповнення")
        .min(3, 'Мінімальна кількість символів 3')
        .max(100, 'Максимальна кількість символів 100'),

      email: yup
        .string()
        .trim()
        .required("Поле обов'язкове для заповнення")
        .email('ПОЛЕ МІСТИТЬ ПОМИЛКУ')
        .min(10, 'Мінімальна кількість символів 10')
        .max(63, 'Максимальна кількість символів 63')
        .matches(
          /^[a-zA-Z0-9zñáéíóúüŁłĄąĘęŃńÓóŹźŻż.]{1}[a-zA-Z0-9zñáéíóúüŁłĄąĘęŃńÓóŹźŻż._-]{1,}[a-zA-Z0-9zñáéíóúüŁłĄąĘęŃńÓóŹźŻż.]{1}@[a-zA-Z0-9zñáéíóúüŁłĄąĘęŃńÓóŹźŻż.-]+.[a-zA-Z]{2,4}$/,
          'ПОЛЕ МІСТИТЬ ПОМИЛКУ',
        ),

      phone: yup
        .string()
        .trim()
        .required("Поле обов'язкове для заповнення")
        .min(9, 'Мінімальна кількість символів 9')
        .max(13, 'Максимальна кількість символів 13')
        .matches(/[0-9]{10}/, 'ПОЛЕ МІСТИТЬ ПОМИЛКУ'),

      telegram: yup
        .string()
        .trim()
        .required("Поле обов'язкове для заповнення")
        .min(17, 'Мінімальна кількість символів 15')
        .max(63, 'Максимальна кількість символів 63')
        .matches(
          /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
          'Поле має містити URL-адресу',
        ),

      group: yup
        .string()
        .trim()
        .required("Поле обов'язкове для заповнення")
        .matches(/^[а-яА-ЯёЁa-zA-Z0-9]+$/, 'ПОЛЕ МІСТИТЬ ПОМИЛКУ'),

      city: yup.string().trim().required("Поле обов'язкове для заповнення"),

      language: yup
        .string("Поле обов'язкове для заповнення")
        .trim()
        .required("Поле обов'язкове для заповнення")
        .nullable(true),

      motive: yup
        .string()
        .trim()
        .required("Поле обов'язкове для заповнення")
        .min(20, 'Мінімальна кількість символів 20')
        .max(2000, 'Максимальна кількість символів 2000'),

      resume: yup
        .string()
        .trim()
        .required("Поле обов'язкове для заповнення")
        .matches(
          /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
          'Поле має містити URL-адрес',
        ),

      linkedin: yup
        .string("Поле обов'язкове для заповнення")
        .trim()
        .required("Поле обов'язкове для заповнення")
        .matches(
          /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
          'Поле має містити URL-адрес',
        ),

      github:
        condition &&
        yup
          .string()
          .trim()
          .required("Поле обов'язкове для заповнення")
          .matches(
            /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
            'Поле має містити URL-адресу',
          ),

      consent: yup
        .boolean()
        .required("Поле обов'язкове для заповнення")
        .oneOf([true], "Поле обов'язкове для заповнення"),
    })
    .required();
};
