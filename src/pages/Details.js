import {useLocation, useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const blog = location.state;

  return (
    <Card sx={{ maxWidth: 672, margin:'2rem auto' }}>
      <CardMedia
        component="img"
        alt={blog.title}
        height="380"
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
        <Button size="small" onClick={()=>navigate(-1)}>Go Back</Button>
      </CardActions>
    </Card>
  )
}

export default Details;