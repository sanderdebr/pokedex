import React from 'react';
import { connect } from 'react-redux';

import { loadMove } from '../../redux/actions/pokemon';

import { Typography } from '@material-ui/core';

function Content({ currentMove }) {

    const description = currentMove.flavor_text_entries[2].flavor_text;

    return (
        <Typography>{description}</Typography>
    )
};

function mapStateToProps(state) {

    return {
        currentMove: state.pokemonReducer.currentMove
    }
}

const MoveContent = connect(mapStateToProps, { loadMove })(Content);

export default MoveContent;