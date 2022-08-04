//import { useContext } from "react";

import BlogCard from "../components/BlogCard";
import { useFetch } from "../helpers/firestoreFunctions";
import {Grid} from '@mui/material';

const Dashboard = () => {
  const { isLoading, blogs, getBlogs } = useFetch();

  return isLoading ? (<div>Loading...</div>
  ) : (
    <Grid container spacing={6} 
    justifyContent="center" 
    alignItems="center"
    sx={{marginTop:'3rem'}}>
{    blogs.map((blog)=> {
      return (
        <Grid item key={blog.id} >
          <BlogCard blog={blog} getBlogs={getBlogs}/>
        </Grid>
      )
    })}

  </Grid>);
};

export default Dashboard;
