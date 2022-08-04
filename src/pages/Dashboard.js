//import { useContext } from "react";

import BlogCard from "../components/BlogCard";
import { useFetch } from "../helpers/firestoreFunctions";
import {Box, Grid} from '@mui/material';

const Dashboard = () => {
  const { isLoading, blogs, getBlogs } = useFetch();

  return isLoading ? (<div>Loading...</div>
  ) : (
    <Grid container spacing={6} 
    justifyContent="center" 
    alignItems="center"
    gap='3rem'
    sx={{ maxWidth:'100%', margin:'3rem auto'}}>
      {blogs.map((blog)=> {
      return (
          <BlogCard key={blog.id} blog={blog} />
      )
    })}

  </Grid>);
};

export default Dashboard;
