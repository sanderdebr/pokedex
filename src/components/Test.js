import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../js/actions';

const mapStateToProps = state => {
    return { pokemons: state.pokemons };
};

// class Test extends React.Component {
//     componentDidMount() {
//       this.props.getData();
//     }
//     render() {
//       return null
//     }
// }

function Test(props) {
    useEffect(() => props.getData());

    return null;
}

export default connect(mapStateToProps, { getData })(Test);