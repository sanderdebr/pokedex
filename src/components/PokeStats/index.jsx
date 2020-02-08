import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ProgressBar from 'react-customizable-progressbar';

import './pokestats.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    heading: {
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    progressHolder: {
      width: '150px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    progressText: {
      position: 'absolute'
    },
    statTitle: {
      fontSize: '.7rem'
    }
  }));

const Stats = ({ stats }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" className={classes.heading}>Stats</Typography>
                        <Container maxWidth="md" className={classes.container}>
                            {stats.map(stat => (
                              <div className={classes.progressHolder}>
                                <div className={classes.progressText}>
                                  <Typography variant="h6" className={classes.statTitle}><strong>{stat.stat.name}</strong></Typography>
                                  <Typography variant="h5">{stat.base_stat}</Typography>
                                </div>
                                <ProgressBar
                                    className={classes.progress}
                                    radius={100}
                                    progress={stat.base_stat}
                                    strokeWidth={18}
                                    strokeColor="#ee1515"
                                    trackStrokeWidth={18}
                                />
                              </div>
                            ))}
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};

function getPoke(state, curPokeId) {
  const pokemons = state.mainReducer.pokemons;
  const values = Object.values(pokemons);
  for (let i = 0; i < values.length; i++) {
    if (values[i].id === curPokeId) return values[i];
  }
};

function mapStateToProps(state) {
    const curPokeId = state.mainReducer.currentPokemon;
    const pk = getPoke(state, curPokeId);
    
    return { 
        stats: pk.stats,
     }
}

const PokeStats = connect(mapStateToProps)(Stats);

export default PokeStats;