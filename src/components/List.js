import React from 'react';
import { connect } from 'react-redux';
import { fetchAll, resetData } from '../redux/actions';

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

function List({ fetchAll, resetData, pokemons, loading, timer, filter }) {
    const classes = useStyles();
    
    const testPokemon = { name: 'Pikachu' };

    const filteredPokemons = pokemons.filter(pk => pk.name.includes(filter));
    
    return (
        <>
            <Container maxWidth="lg">
                <Paper className={classes.options}>
                    <Button variant="outlined" onClick={fetchAll}>Catch Pokemons</Button>
                    <Button variant="outlined" onClick={resetData}>Reset</Button>
                    <Typography>Catched in: {timer ? timer : '...'} ms</Typography>
                </Paper>
            </Container>
            <Container maxWidth="lg" className={classes.container}>
                {loading ? <Typography>Catching...</Typography> : ''}
                {filteredPokemons.map(pokemon => (
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
        pokemons: state.pokemons, 
        loading: state.loading, 
        timer: state.timer,
        filter: state.filter
    }
};

const actionCreators = {
    resetData,
    fetchAll,
};

export default connect(mapStateToProps, actionCreators)(List);