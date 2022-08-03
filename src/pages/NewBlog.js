import {
  Typography,
  TextField,
  Button,
  Box
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useState} from 'react';
import { createBlog } from "../helpers/firestoreFunctions";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function NewBlog() {
  const navigate = useNavigate();
  const {currentUser}= useContext(AuthContext);

  const [values, setValues] = useState({title:'',url:'', definition:''});

  const handleAddNewBlog = ()=>{
      if (values.title === '') { values.title = 'New title'};
      if (values.definition === '') { values.definition = 'New title'};
      if (values.url === '') { values.url = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/af/4a/c6/decouvrez-strasbourg.jpg?w=1200&h=-1&s=1'};
      createBlog(values.definition, currentUser.displayName, values.title, currentUser.uid, values.url)
      setValues({title:'',url:'', definition:''})
      navigate('/')
  }

  const handleChange = (e)=>{
    setValues({...values, [e.target.name]:e.target.value} )
  }


  return (
    <div className="App">
    <Typography variant="h5" my={6} sx={{textAlign:'center'}}>New Blog</Typography>
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
        onClick={handleAddNewBlog}>
          ADD
        </Button>
      </form>
      </Box>
    </div>
  );
}
