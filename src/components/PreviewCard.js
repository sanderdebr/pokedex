import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: '.5rem'
  },
  media: {
    height: 140,
  },
});

// Loop through object sprites and return first existing image
function getSprite(sprites) {
  const keys = Object.keys(sprites)
  for (let i = 0; i < keys.length; i++) {
    if (keys[i]) return Object.values(sprites)[i];
  }
};

export default function PreviewCard({ pokemon }) {
  const classes = useStyles();

  const { name, type } = pokemon;
  const sprite = pokemon.sprites ? getSprite(pokemon.sprites) : '';

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={sprite}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}