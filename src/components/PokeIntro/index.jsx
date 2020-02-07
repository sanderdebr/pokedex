import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { fetchDescription } from '../../redux/actions/pokemon';

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
    paddingBottom: '1rem'
  }
}));

function Intro({ types, sprite, name, fetchDescription }) {
  const classes = useStyles();
  const params = useParams();
  let id = parseInt(params.pokemonId);
  let prev = id > 1 ? id - 1 : 1;
  let next = id + 1;

  const description = fetchDescription();

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
                <img src={sprite} className={classes.sprite} />
              </Grid>
              <Grid item xs={4} className={classes.iconContainer}>
                <Link to={`/pokemon/${next}`}>
                  <ArrowForwardIcon className={classes.arrow} />
                </Link>
              </Grid>
            </Grid>
            <Typography variant="h2" className={classes.name}>{name}</Typography>
            <Types types={types} />
            <Typography variant="h6">{description}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

// Only selecting properties we need the current Pokemon
const mapStateToProps = state => {
  const pk = state.pokemons[state.currentPokemon];
  return { 
    id: pk.id,
    types: pk.types,
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

const PokeIntro = connect(mapStateToProps, { fetchDescription })(Intro);

export default PokeIntro;