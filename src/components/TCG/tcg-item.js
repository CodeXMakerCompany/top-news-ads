import React from "react";
import { cardStyles } from "../react-material-styles/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export const TcgItem = (card) => {
  const classes = cardStyles();
  const {
    card: {
      images,
      originalPrice,
      salePrice,
      set_name,
      sold,
      specs,
      stock,
      tcg_name,
      title,
    },
  } = card;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{tcg_name}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={set_name}
      />
      <CardMedia
        className={classes.media}
        image={images[0].image}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Precio original : {originalPrice}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Precio de venta :{salePrice}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Vendidas : {sold}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Efecto : {specs.details}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Nos quedan : {stock}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
