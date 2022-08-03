import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { FaUserEdit } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { createUser } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e, fullName, email, password)=>{
    e.preventDefault();
    createUser(email, password, navigate, fullName)
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
        <FaUserEdit size="40" />
      </Avatar>
      <Typography variant="h4" align="center" mb={4} color="primary.dark">
        Register
      </Typography>

      <Formik
        initialValues={{ fullName: '', email: '', password: '' }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string()
            .max(20, 'Fullname should be less than 16 characters')
            .required(`Fullname can't be empty`),

            email: Yup.string()
            .email('Please enter a valid email address')
            .required(`Email can't be empty`),
          password: Yup.string()
            .min(8, 'Password should be at least 8 characters')
            .max(16, 'Password should be less than 16 characters')
            .required(`Password can't be empty`)
            .matches(/\d+/, 'Password should contain digit')
            .matches(/[a-z]+/, 'Password should contain lower case character')
            .matches(/[A-Z]+/, 'Password should contain upper case character')
            .matches(/[!,?{}><%&$#£+-.]+/, 'Password should contain special character'),
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
          <Form onSubmit={(e)=>handleSubmit(e, values.fullName, values.email, values.password)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <TextField
                label="Full Name"
                name="fullName"
                id="fullName"
                type="text"
                variant="outlined"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.fullName && errors.fullName}
                error={touched.fullName && Boolean(errors.fullName)}
              />
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
              <Button type="submit" variant="contained" size="large" disabled={(values.fullName === '' && values.email === '' && values.password === '') || Boolean(errors.fullName) || Boolean(errors.email) || Boolean(errors.password)}>
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
