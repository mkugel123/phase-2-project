import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import { textAlign } from "@mui/system";

function FoodCard({ item, handleClick, action, children }) {
  const {name, image, price, side, category} = item
  return (
    <Grid item>
      <Card sx={{ width: 300, minHeight: 400 }}>
        <CardHeader
          sx={{minHeight: "75px"}}
          title={name}
        />
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>
          {category === "soup" ? null : <Typography variant="body2" color="text.secondary"><strong>Side: </strong>{side}</Typography>}
          <br/>
          <Typography variant="overline text" ><strong>Price: </strong>${price}</Typography> 
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>{action}</Button>
        </CardActions>
        <Typography sx={{ textAlign: "center" }}>{children}</Typography>
      </Card>
    </Grid>
  );
}

export default FoodCard