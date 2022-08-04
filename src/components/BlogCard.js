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
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function BlogCard({blog, getBlogs}) {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(blog.likers.length-1);
  const [commentCount, setCommentCount] = useState(blog.comments.length-1)
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
  
  // const handleLike = ()=>{
  //   updateLikes(blog.id, blog.likers, currentUser.uid);
  //   getBlogs();
  // }

  const handleDelete = ()=> {
    deleteBlog(blog.id);
    setBlogDeleted(true);
    getBlogs();
  }

  
  return (
    !blogDeleted &&
    <Card sx={{ width: 385, margin:'0 auto 3rem' }}>
      <CardMedia
        component="img"
        alt={blog?.title}
        height="140"
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
        <Box>
        <Button size="small" onClick={()=>navigate(`/details/${blog?.id}`, {state:blog})}>Details</Button>
        {blog?.uid === currentUser.uid && <Button size="small" onClick={()=>navigate(`/updateblog`, {state:blog})}>Edit</Button> }
        {blog?.uid === currentUser.uid && <Button size="small" onClick={handleDelete}>Delete</Button> }
        </Box>
        <Box sx={{display:'flex', justifyContent:'end', alignItems:'center', gap:'0.4rem'}}>
          <Button size="small" onClick={handleLike}><FavoriteIcon sx={{color:isLikedByUser ? 'red':'lightgrey', width:'1.5rem'}}/> </Button>
          <Typography>{likeCount}</Typography>
          <Button size="small"><ChatBubbleOutlineIcon onClick={()=>navigate(`/details/${blog?.id}`)} sx={{color: commentCount ? 'green':'lightgrey', width:'1.5rem'}}/> </Button>
          <Typography>{commentCount}</Typography>
        </Box>
      </CardActions>
    </Card>
  );
}
