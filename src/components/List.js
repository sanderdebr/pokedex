import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from '../js/actions';

import PokeCard from './PokeCard';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '.5rem',
    }
}));

const mapStateToProps = state => {
    return { pokemons: state.pokemons };
};

const List = (props) => {
    const classes = useStyles();

    const { getData } = props;

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <>
            <Container maxWidth="xl" className={classes.container}>
                {props.pokemons.map((pokemon, i) => (
                    <PokeCard key={pokemon[i]} name={pokemon.name}></PokeCard>
                ))}
            </Container>
        </>
    );
};

const connectedList = connect(mapStateToProps, { getData })(List);

export default connectedList;