import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Types from './Types';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: '.5rem'
  },
  media: {
    height: 140,
    backgroundSize: 'contain'
  },
});

export default function PreviewCard({ pokemon }) {
  const classes = useStyles();

  const { name, types } = pokemon;
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
          {types ? <Types types={types} /> : ''}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// Loop through object sprites and return first existing image
function getSprite(sprites) {
  const keys = Object.keys(sprites);
  const values = Object.values(sprites);
  for (let i = keys.length; i > 0; i--) {
    if (values[i] !== undefined && values[i] !== null) {
        return values[i];
    }
  };
};