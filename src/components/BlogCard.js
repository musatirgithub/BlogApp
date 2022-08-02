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


export default function BlogCard({blog}) {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(blog.likers.length-1)
  const [isLikedByUser, setIsLikedByUser] = useState(blog.likers.includes(currentUser.uid))


  const handleLike = ()=>{
    if (!isLikedByUser) {
      updateLikes(blog.id, blog.likers, currentUser.uid);
      setLikeCount(likeCount + 1);
      setIsLikedByUser(true);
    } else{
      alert('You can like a blog only once!')
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
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
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
        <Box>
        <Button size="small" onClick={()=>navigate(`/details/${blog.id}`, {state:blog})}>Details</Button>
        {blog.uid === currentUser.uid && <Button size="small">Edit</Button> }
        {blog.uid === currentUser.uid && <Button size="small">Delete</Button> }
        </Box>
        <Button size="small" onClick={handleLike}>{isLikedByUser ? '❤️' : '🤍'} {likeCount}</Button>
      </CardActions>
    </Card>
  );
}
