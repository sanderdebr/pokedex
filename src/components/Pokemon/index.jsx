import React from 'react';

import { useParams } from 'react-router-dom';

const Pokemon = () => {
    let { pokemonId } = useParams();

    return (
        <h1>pokemon: {pokemonId}</h1>
    )
};

export default Pokemon;