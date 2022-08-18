import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"

export default function MediaCard({item,index}) {

    const [showMore, setShowMore] = useState(true);
   
  return (
    <Card sx={{ display: 'flex', alignItems:"center",...(index%2===0&&{flexDirection:{xs:"column",md:"row"}}),...(index%2===1 &&{flexDirection:{xs:"column",lg:"row-reverse"}}), borderRadius:"25px", marginBottom:{sm:"20px",md:"50px"}}} >
        
      <CardMedia
        component="img"
        image={process.env.PUBLIC_URL+item?.image}
        alt="image"
        sx={{height:"100%", width: {xs:"100%",md:"30%"},  }}

      />
      <Box style={{padding:"20px" }}>
      <CardContent >
        <Typography gutterBottom variant="h4" component="div">
          {item?.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
