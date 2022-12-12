import * as React from 'react';
import NotAv from '../Frame1.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Newscard(props) {
  return (
    <Card className="h-fit border-0 rounded-full hover:transform hover:transition-all hover:scale-105 hover:duration-300" sx={{ maxWidth: 345 , borderRadius: 2}} >
      {props.image?<CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />:<CardMedia
      component="img"
      height="140"
      image={NotAv}
      alt="green iguana"
    /> }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" href={props.url} target="_blank">Read More</Button>
      </CardActions>
    </Card>
  );
}