import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import {
  Wrapper,
  Title,
  StyledLabel,
  StyledInput,
  StyledLink,
  StyledBtn,
  StyledQuestion,
  StyledQuestText,
  ErrrorText,
} from './LoginForm.styled';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Enter your email'),
  password: Yup.string()
    .length(6, 'Password should be 6 characters long')
    .required('Enter your password'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });
  return (
    <Wrapper onSubmit={formik.handleSubmit} autoComplete="off">
      <Title>{isLoginPage ? 'Login' : 'Register'}</Title>
      <StyledLabel>
        Email
        <StyledInput
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
        />
        {formik.errors.email ? (
          <ErrrorText>{formik.errors.email}</ErrrorText>
        ) : null}
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
        {formik.errors.password ? (
          <ErrrorText>{formik.errors.password}</ErrrorText>
        ) : null}
      </StyledLabel>
      <StyledQuestText>Forgot password?</StyledQuestText>

      <StyledBtn type="submit" disabled={formik.isSubmitting}>
        {isLoginPage ? 'Sign In' : 'Sign up'}
      </StyledBtn>
      {isLoginPage ? (
        <StyledQuestion>
          Don’t have account? <StyledLink to="/register">Sign up</StyledLink>
        </StyledQuestion>
      ) : (
        <StyledQuestion>
          Log into account? <StyledLink to="/login">Sign in</StyledLink>
        </StyledQuestion>
      )}
    </Wrapper>
  );
};
