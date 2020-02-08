import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDescription } from '../../redux/actions/pokemon';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import pokeball from '../../img/pokeball.gif';

import Types from '../PreviewCard/Types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  sprite: {
    width: '200px'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrow: {
    fontSize: '3rem',
    color: theme.palette.primary.main
  },
  name: {
    marginBottom: '1rem',
  },
  pokeball: {
    width: '30px',
    height: '30px',
    marginRight: '1rem',
  },
  description: {
    marginTop: '1rem',
    display: 'block'
  }
}));

function Intro({ types, sprite, name, description, fetchDescription }) {
  const classes = useStyles();
  const params = useParams();
  let id = parseInt(params.pokemonId);
  let prev = id > 1 ? id - 1 : 1;
  let next = id + 1;

  // Retrieve description on component mount
  useEffect(() => {
    fetchDescription(id);
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={4} className={classes.iconContainer}>
                <Link to={`/pokemon/${prev}`}>
                  <ArrowForwardIcon className={classes.arrow} style={{transform: 'rotate(180deg)'}} />
                </Link>
              </Grid>
              <Grid item xs={4}>
                <img alt={sprite} src={sprite} className={classes.sprite} />
              </Grid>
              <Grid item xs={4} className={classes.iconContainer}>
                <Link to={`/pokemon/${next}`}>
                  <ArrowForwardIcon className={classes.arrow} />
                </Link>
              </Grid>
            </Grid>
            <Typography variant="h2" className={classes.name}>{name}</Typography>
            <Types types={types} />
            <div className={classes.description}>
              {!description
              ? <>
                  <img alt={pokeball} className={classes.pokeball} src={pokeball}></img>
                  <Typography>Catching...</Typography>
                </>
              : <Typography variant="h6">{description}</Typography>}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

function getPoke(state, curPokeId) {
  const pokemons = state.mainReducer.pokemons;
  const values = Object.values(pokemons);
  for (let i = 0; i < values.length; i++) {
    if (values[i].id === curPokeId) return values[i];
  }
};

// Only selecting properties we need the current Pokemon
const mapStateToProps = state => {

  const curPokeId = state.mainReducer.currentPokemon;
  const pk = getPoke(state, curPokeId);

  const description = state.pokemonReducer.description;
  return { 
    id: pk.id,
    types: pk.types,
    sprite: getSprite(pk.sprites),
    name: pk.name,
    description,
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

const PokeIntro = connect(mapStateToProps, { fetchDescription })(Intro);

export default PokeIntro;