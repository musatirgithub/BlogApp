//import { useContext } from "react";

import BlogCard from "../components/BlogCard";
import { useFetch } from "../helpers/firestoreFunctions";
import {Grid} from '@mui/material';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { isLoading, blogs } = useFetch();
  const {currentUser}= useContext(AuthContext);

  return isLoading ? (<div>Loading...</div>
  ) : (
    <Grid container spacing={2} 
    justifyContent="center" 
    alignItems="center"
    sx={{marginTop:'3rem'}}>
{    blogs.filter((item)=>item.uid === currentUser.uid).map((blog)=> {
      return (
        <Grid item key={blog.id} xs={12} sm={6} md={4}>
          <BlogCard blog={blog} />
        </Grid>
      )
    })}

  </Grid>);
};

export default Profile;
