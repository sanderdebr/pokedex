import React from 'react';
import { connect } from 'react-redux';
import { fetchData, addPokemon, resetData } from '../redux/actions';

import { makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import PreviewCard from './PreviewCard';

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
    }
}));

function List({ fetchData, addPokemon, resetData, pokemons, loading, timer }) {
    const classes = useStyles();
    
    const testPokemon = { name: 'Pikachu' };
    
    return (
        <>
            <Container maxWidth="lg">
                <Paper className={classes.options}>
                    <Button variant="outlined" onClick={() => addPokemon(testPokemon)}>Add Pokemon</Button>
                    <Button variant="outlined" onClick={fetchData}>Catch 100 Pokemons</Button>
                    <Button variant="outlined" onClick={resetData}>Reset</Button>
                    <Typography>Catched in: {timer ? timer : '...'} ms</Typography>
                </Paper>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
                {loading ? <Typography>Loading...</Typography> : ''}
                {pokemons.map((pokemon, i) => (
                    <PreviewCard key={pokemon[i]} name={pokemon.name}></PreviewCard>
                ))}
            </Container>
        </>
    )
};

function mapStateToProps(state) {
    return { pokemons: state.pokemons, loading: state.loading, timer: state.timer }
};

const actionCreators = {
    resetData,
    fetchData,
    addPokemon,
};

export default connect(mapStateToProps, actionCreators)(List);