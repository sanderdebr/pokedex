import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../js/actions';

const mapStateToProps = state => {
    return { pokemons: state.pokemons };
};

const ConnectedList = (props) => {

    useEffect(() => {
        props.getData();
    }, []);

    return (
        <ul>
            {props.pokemons.map((pokemon, i) => (
                <li key={pokemon[i]}>{pokemon.name}</li>
            ))}
        </ul>
    );
};

const List = connect(mapStateToProps, { getData })(ConnectedList);

export default List;