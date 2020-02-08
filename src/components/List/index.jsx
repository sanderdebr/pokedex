import React from 'react';
import { connect } from 'react-redux';
import { fetchAll, resetData } from '../../redux/actions/root';

import { makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import PreviewCard from '../PreviewCard';

import pokeball from '../../img/pokeball.gif';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '1rem',
    },
    options: {
        display: 'flex',
        alignItems: 'center',
        padding: '.5rem',
        marginTop: '1rem',
        '& > *': {
            marginRight: '1rem'
        }
    },
    pokeball: {
        width: '30px',
        height: '30px',
        marginRight: '1rem',
    }
}));

function List({ fetchAll, resetData, pokemons, loading, timer, filter, error }) {
    const classes = useStyles();

    const filteredPokemons = pokemons.filter(pk => pk.name.includes(filter));
    
    return (
        <>
            <Container maxWidth="lg">
                <Paper className={classes.options}>
                    <Button variant="outlined" onClick={fetchAll}>Catch Pokemons</Button>
                    <Button variant="outlined" onClick={resetData}>Reset</Button>
                    <Typography>{
                        error
                        ? <span>Something bad happened: {error.message}</span>
                        : <span>Catched in: {timer ? timer : '...'} ms</span>
                    }</Typography>
                </Paper>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
                {loading 
                ? <>
                    <img alt={pokeball} className={classes.pokeball} src={pokeball}></img>
                    <Typography>Catching...</Typography>
                  </>
                : ''}
                {filteredPokemons.map((pokemon, i) => (
                    <PreviewCard 
                        key={pokemon.name} 
                        pokemon={pokemon}
                    ></PreviewCard>
                ))}
            </Container>
        </>
    )
};

function mapStateToProps(state) {
    return { 
        pokemons: state.mainReducer.pokemons, 
        loading: state.mainReducer.loading, 
        timer: state.mainReducer.timer,
        filter: state.mainReducer.filter,
        error: state.mainReducer.error
    }
};

const actionCreators = {
    resetData,
    fetchAll,
};

export default connect(mapStateToProps, actionCreators)(List);