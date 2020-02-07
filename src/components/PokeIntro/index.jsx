import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));

function Intro({ pokemon, sprite, name }) {
  const classes = useStyles();
  
  console.log(pokemon);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={sprite} />
            <Typography variant="h2">{name}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

// Only selecting properties we need the current Pokemon
const mapStateToProps = state => {
  const pk = state.pokemons[state.currentPokemon];
  if (!pk) return;
  return { 
    pokemon: pk,
    sprite: getSprite(pk.sprites),
    name: pk.name
  };
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

const PokeIntro = connect(mapStateToProps)(Intro);

export default PokeIntro;