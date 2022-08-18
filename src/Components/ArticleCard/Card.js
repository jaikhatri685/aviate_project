import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { shadows } from '@mui/system';

export default function MediaCard({item,index}) {

    const [showMore, setShowMore] = useState(true);
   
  return (
    <Card sx={{padding:"20px",boxShadow: 2, display: 'flex', alignItems:"center",...(index%2===0&&{flexDirection:{xs:"column",md:"row"}}),...(index%2===1 &&{flexDirection:{xs:"column",lg:"row-reverse"}}), borderRadius:"25px" ,mb:6}} >
        
      <CardMedia
        component="img"
        image={process.env.PUBLIC_URL+item?.image}
        alt="image"
        sx={{boxShadow: 2,height:"100%", width: {xs:"100%",md:"30%"}, borderRadius:"25px"  }}

      />
      <Box sx={{...(index%2===0 && {pl:6}),...(index%2===1 &&{pr:6}) }}>
      <CardContent sx={{}}>
        <Typography gutterBottom variant="h4" component="div">
          {item?.heading}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {showMore && item?.info.substring(0, 500)}
          {!showMore && item?.info}
        </Typography>
      </CardContent>
      <CardActions >
      
        <Button size="small" onClick={()=>{setShowMore(!showMore)}}>{showMore?"Show More":"Show Less"}</Button>
      </CardActions>
      </Box>
 
    </Card>
  );
}
