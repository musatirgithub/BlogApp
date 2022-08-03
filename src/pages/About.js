import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const About = () => {
  return (
    <div>
      <Grid
        container
        spacing={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "3rem" }}
      >
        <Grid item>
          <Typography gutterBottom variant="h5" component="div">
            Shutter Blog is Developed by Mehmet Uğur ŞATIR
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h6" component="div">
            The tools used in this project are:
          </Typography>
        </Grid>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "3rem" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "0 auto 3rem" }}>
              <CardMedia
                component="img"
                alt="react"
                height="140"
                image="https://www.ahtapotyazilim.com/wp-content/uploads/2021/10/react-js.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React, React Router DOM, Context API, Firebase AUTH,
                  Firestore, Formik, Yup, MUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "0 auto 3rem" }}>
              <CardMedia
                component="img"
                alt="react router dom"
                height="140"
                image="https://miro.medium.com/max/1200/1*5PnKqQdmi1WtqmX3hW9nXA.jpeg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React Router DOM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React, React Router DOM, Context API, Firebase AUTH,
                  Firestore, Formik, Yup, MUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "0 auto 3rem" }}>
              <CardMedia
                component="img"
                alt="context api"
                height="140"
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--Qj17HL0m--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/emdosd9tj8bfly5is35y.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Context API
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React, React Router DOM, Context API, Firebase AUTH,
                  Firestore, Formik, Yup, MUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "0 auto 3rem" }}>
              <CardMedia
                component="img"
                alt="firebase auth"
                height="140"
                image="https://molo17.com/wp-content/uploads/2019/03/1zTdZMxbTkVdXCOoZlXLnsg.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Firebase AUTH
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React, React Router DOM, Context API, Firebase AUTH,
                  Firestore, Formik, Yup, MUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "0 auto 3rem" }}>
              <CardMedia
                component="img"
                alt="firestore"
                height="140"
                image="https://images.ctfassets.net/ooa29xqb8tix/4rGtyCA9MFGJQ6pQHaoNO3/fe92786cef7c7eb0165bc3f96a9ca29d/Screen_Shot_2021-03-17_at_3.51.01_PM.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Firestore
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React, React Router DOM, Context API, Firebase AUTH,
                  Firestore, Formik, Yup, MUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "0 auto 3rem" }}>
              <CardMedia
                component="img"
                alt="formik"
                height="140"
                image="https://formik.org/images/formik-og.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Formik
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React, React Router DOM, Context API, Firebase AUTH,
                  Firestore, Formik, Yup, MUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "0 auto 3rem" }}>
              <CardMedia
                component="img"
                alt="yup"
                height="140"
                image="https://i0.wp.com/scanskill.com/wp-content/uploads/2022/03/Form-validation-using-Formik-and-Yup-in-React.js.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Yup
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React, React Router DOM, Context API, Firebase AUTH,
                  Firestore, Formik, Yup, MUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "0 auto 3rem" }}>
              <CardMedia
                component="img"
                alt="mui"
                height="140"
                image="https://cdn.filestackcontent.com/5yjLJYBrQ6EHpN9dK0ak"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  MUI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React, React Router DOM, Context API, Firebase AUTH,
                  Firestore, Formik, Yup, MUI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
