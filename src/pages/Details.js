import {useLocation, useNavigate, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import {Box} from '@mui/material';
import {postComment} from '../helpers/firestoreFunctions';
import {useFetch} from '../helpers/firestoreFunctions';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Details = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {blogs, getBlogs } = useFetch();
  const {currentUser} = useContext(AuthContext);

  const [blog, setBlog] = useState([]);
  const [comment, setComment] = useState('');

useEffect(() => {
  const post = blogs?.filter((item)=>item.id === id);
  setBlog(post && post[0]);
}, [blogs])

 
  console.log(blog);

  const handlePost = ()=>{
    postComment(blog.id, blog.comments, currentUser.displayName, comment);
    getBlogs();
    setComment('');
  }

  return (
    <Card sx={{ maxWidth: 672, margin:'2rem auto' }}>
      <CardMedia
        component="img"
        alt={blog?.title}
        height="380"
        image={blog?.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog?.definition}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Added by ${blog?.displayName}`}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
        <Button size="small" onClick={()=>navigate(-1)}>Go Back</Button>
      </CardActions>
      <Box>
      <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
      <TextField
                name="comment"
                id="comment"
                type="text"
                variant="outlined"
                placeholder='Enter your comment here...'
                sx={{width:'85%'}}
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
              />
      <Button size="medium" onClick={handlePost} variant='contained'>Post</Button>
      </Box>
      <Box sx={{height:'8rem', overflow:'auto', padding:'0.4rem 0 0.1rem 0.8rem'}}>
      <Typography gutterBottom variant="body2" component="div" sx={{fontWeight:'700'}}>
          Comments:
        </Typography>
        {blog?.comments?.map((item, index)=>{
          return (
            item !== 'null' &&
          <Typography gutterBottom variant="body2" component="div" key={index}>
          <span style={{fontweight:'700'}}>{`${item.displayName}:`}</span>{`${item.comment}`}
        </Typography>
          )
        })}
      </Box>
      </Box>
    </Card>
  )
}

export default Details;