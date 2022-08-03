import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { FaLock } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { forgotPassword, signIn, signUpProvider } from '../helpers/firebase';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleProviderLogin = () => {
        signUpProvider(navigate);
      };

    const handleLogin = (e, email, password)=>{
        e.preventDefault(e);
        signIn(email, password, navigate)
    }

    const handleForgotPassword = (email)=>{
      forgotPassword(email);
    }

  return (
    <Container maxWidth="sm" sx={{ mt: '10rem', textAlign: 'center' }}>
      <Avatar
        sx={{
          backgroundColor: 'primary.main',
          m: 'auto',
          width: 60,
          height: 60,
        }}
        sizes="100px"
      >
        <FaLock size="40" />
      </Avatar>
      <Typography variant="h4" align="center" mb={4} color="primary.dark">
        Login
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string()
            .max(20, 'fullname 20 veya daha az karakter olmalıdır')
            .required('Lutfen fullname kismini bos birakmayiniz'),

          email: Yup.string()
            .email('Lutfen gecerli email adresini giriniz.')
            .required('Lutfen email kismini bos birakmayiniz'),
          password: Yup.string()
            .min(8, 'Sifre en az 8 karakter icermelidir')
            .max(16, 'Sifre en fazla 16 karakter icermelidir.')
            .required('Lutfen password kismini bos birakmayiniz')
            .matches(/\d+/, 'Sifre rakam icermelidir')
            .matches(/[a-z]+/, 'Sifre kucuk harf icermelidir')
            .matches(/[A-Z]+/, 'Sifre buyuk harf icermelidir')
            .matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakter icermelidir'),
        })}
        onSubmit={(values, actions) => {
          alert(`fullName: ${values.fullName}
            email: ${values.email}
            password: ${values.password}
          `);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form onSubmit={(e)=>handleLogin(e, values.email, values.password)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
              />
              <TextField
                label="password"
                name="password"
                id="password"
                type="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
              />
              <Button type="submit" variant="contained" size="large" disabled={Boolean(errors.email) || Boolean(errors.password)}>
                Login
              </Button>
              {!Boolean(errors.email) && <Button onClick={()=>handleForgotPassword(values.email)} variant="text" size="large">
                FORGOT your password?
              </Button>}
              <Button onClick={handleProviderLogin} variant="contained" size="large">
                Login with Google
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
