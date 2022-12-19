import { useField } from 'formik';

function TextImport({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <input className="auth-form__input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <span>
          <p className="form__input-error_active">{meta.error}</p>
        </span>
      ) : null}
    </>
  );
}

export default TextImport;
