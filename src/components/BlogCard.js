import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {updateLikes} from '../helpers/firestoreFunctions';
import {useNavigate} from 'react-router-dom';
import { deleteBlog } from '../helpers/firestoreFunctions';
import toast from 'react-hot-toast';


export default function BlogCard({blog}) {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(blog.likers.length-1);
  const [isLikedByUser, setIsLikedByUser] = useState(blog.likers.includes(currentUser.uid));
  const [blogDeleted, setBlogDeleted] = useState(false);

  const handleLike = ()=>{
    if (!isLikedByUser) {
      updateLikes(blog.id, blog.likers, currentUser.uid);
      setLikeCount(likeCount + 1);
      setIsLikedByUser(true);
    } else{
      toast.error('You can like a blog only once!')
    }
  }
  

  const handleDelete = ()=> {
    deleteBlog(blog.id);
    setBlogDeleted(true);
  }

  
  return (
    !blogDeleted &&
    <Card sx={{ width: 345, margin:'0 auto 3rem' }}>
      <CardMedia
        component="img"
        alt={blog.title}
        height="140"
        image={blog.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.definition}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Added by ${blog.displayName}`}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
        <Box>
        <Button size="small" onClick={()=>navigate(`/details/${blog.id}`, {state:blog})}>Details</Button>
        {blog.uid === currentUser.uid && <Button size="small" onClick={()=>navigate(`/updateblog`, {state:blog})}>Edit</Button> }
        {blog.uid === currentUser.uid && <Button size="small" onClick={handleDelete}>Delete</Button> }
        </Box>
        <Button size="small" onClick={handleLike}>{isLikedByUser ? '❤️' : '🤍'} {likeCount}</Button>
      </CardActions>
    </Card>
  );
}
