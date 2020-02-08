import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { loadMoves } from '../../redux/actions/pokemon';

import Move from '../Move';

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
    title: {
        marginTop: '1rem',
        marginBottom: '1rem'
    },
}));

// Only loads Moves when user scrolls 200 pixels before this block
function fireMoves(showMoves, loadMoves) {
    window.addEventListener('scroll', () => checkHeight(movesOffset,loadMoves));
    let movesOffset = document.getElementById('moves').offsetTop;
    
    function checkHeight(movesOffset, loadMoves) {
        if (!showMoves) {
            let currentScroll;
            currentScroll = window.pageYOffset;
            if (currentScroll > movesOffset - 1000) {
                loadMoves(true)
            }
        }
    }
};

const Moves = ({ moves, showMoves, loadMoves }) => {
    const classes = useStyles();

    useEffect(() => {
        fireMoves(showMoves, loadMoves);
    });

    return (
        <div className={classes.root} id="moves">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" className={classes.title}>Moves ({moves.length})</Typography>
                        <Container maxWidth="md" className={classes.container}>
                            {showMoves
                            ? moves.map(item => <Move move={item} />)
                            : <Typography variant="h6">Scroll down to load moves ...</Typography>}
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
        moves: pk.moves,
        showMoves: state.pokemonReducer.showMoves
     }
}

const PokeMoves = connect(mapStateToProps, { loadMoves })(Moves);

export default PokeMoves;