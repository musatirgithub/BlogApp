import {
  Typography,
  TextField,
  Button,
  Box
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useState} from 'react';
import { updateBlog } from "../helpers/firestoreFunctions";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";


export default function UpdateBlog() {
  const navigate = useNavigate();
  //const {currentUser}= useContext(AuthContext);
  const location = useLocation();
  const blog = location.state;

  const [values, setValues] = useState({title:blog.title, url:blog.url, definition:blog.definition});

  const handleUpdateBlog = ()=>{
      updateBlog(blog.id, values.title, values.url, values.definition)
      setValues({title:'',url:'', definition:''})
      navigate('/')
  }

  const handleChange = (e)=>{
    setValues({...values, [e.target.name]:e.target.value} )
  }


  return (
    <div className="App">
    <Typography variant="h5" my={6} sx={{textAlign:'center'}}>Update Blog</Typography>
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <form>
        <TextField
          style={{ width: "350px", margin: "5px" }}
          type="text"
          label="Title"
          name='title'
          variant="outlined"
          value={values.title}
          onChange={handleChange}
        />
        <br />
        <TextField
          style={{ width: "350px", margin: "5px" }}
          type="text"
          label="Url"
          name='url'
          variant="outlined"
          value={values.url}
          onChange={handleChange}
        />
        <br />
        <TextField
          style={{ width: "350px", margin: "5px" }}
          type="text"
          label="Definition"
          name='definition'
          variant="outlined"
          value={values.definition}
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" color="primary" 
        sx={{width:'100%', margin:'2rem auto', }}
        onClick={handleUpdateBlog}>
          UPDATE
        </Button>
      </form>
      </Box>
    </div>
  );
}
