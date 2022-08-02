//import { useContext } from "react";

import BlogCard from "../components/BlogCard";
import { useFetch } from "../helpers/firestoreFunctions";

const Dashboard = () => {
  const { isLoading, blogs } = useFetch();

  return isLoading ? (<div>Loading...</div>
  ) : (
  <div>
{    blogs.map((blog)=> {
      return (
        <div key={blog.uid}>
          <BlogCard blog={blog} />
        </div>
      )
    })}

  </div>);
};

export default Dashboard;
