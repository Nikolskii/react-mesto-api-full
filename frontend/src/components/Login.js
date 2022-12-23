import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextImport from './TextInput';

function Login({ onLogin }) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <section className="auth">
      <h1 className="auth__title">Вход</h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Неверно указан адрес электронной почты')
            .required('Поле обязательно к заполнению'),
          password: Yup.string()
            .min(8, 'Пароль должен содержать не менее 6 символов')
            .required('Поле обязательно к заполнению'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          onLogin({ email: values.email, password: values.password });

          setSubmitting(false);
        }}
      >
        <Form className="auth-form">
          <fieldset className="auth-form__fieldset">
            <TextImport name="email" type="text" placeholder="Email" />
            <TextImport name="password" type="password" placeholder="Пароль" />
          </fieldset>

          <button className="auth-form__button" type="submit">
            Войти
          </button>
        </Form>
      </Formik>
    </section>
  );
}
export default Login;
