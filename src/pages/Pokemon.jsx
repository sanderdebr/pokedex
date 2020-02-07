import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPokemon } from '../redux/actions';

import { useParams } from 'react-router-dom';

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

const Details = ({ setPokemon }) => {
    let params = useParams();

    // Set current pokemon
    setPokemon(params.pokemonId);

    const classes = useStyles();

    return (
        <>
            <Nav />
            <Container maxWidth="lg" className={classes.container}>
                <PokeIntro />
                <PokeProfile />
                <PokeStats />
                <PokeMoves />
            </Container>
        </>
    );
};

const Pokemon = connect(null, { setPokemon })(Details);

export default Pokemon;