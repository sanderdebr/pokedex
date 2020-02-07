import React from 'react';
import { connect } from 'react-redux';
import { setPokemon } from '../redux/actions/root';

import { useParams, Redirect } from 'react-router-dom';

import Nav from '../components/Nav/';
import PokeIntro from '../components/PokeIntro';
import PokeProfile from '../components/PokeProfile';
import PokeStats from '../components/PokeStats';
import PokeMoves from '../components/PokeMoves';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
    container: {
        marginTop: '1.5rem'
    }
}));

const Details = ({ pokemons, setPokemon }) => {
    let params = useParams();
    let pokemonId = params.pokemonId;

    // Set current pokemon
    setPokemon(pokemonId);

    const classes = useStyles();

    return (
        <>
            <Nav page="pokemon" />
            <Container maxWidth="lg" className={classes.container}>
                {pokemons.length < 1 ? <Redirect to="/"></Redirect> : 
                <>
                    <PokeIntro />
                    <PokeProfile />
                    <PokeStats />
                    <PokeMoves />
                </>}
            </Container>
        </>
    );
};

function mapStateToProps(state) {
    return { pokemons: state.mainReducer.pokemons }
}

const Pokemon = connect(mapStateToProps, { setPokemon })(Details);

export default Pokemon;