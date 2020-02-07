import React from 'react';

import Nav from '../components/Nav/';
import Pokemon from '../components/Pokemon';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '1rem',
    }
}));

const Details = () => (
    <>
        <Nav />
        <Container maxWidth="lg">
            <Pokemon />
        </Container>
    </>
);

export default Details;