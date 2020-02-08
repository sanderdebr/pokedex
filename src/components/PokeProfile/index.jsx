import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    table: {
        '& td:first-child': {
            textAlign: 'right'
        },
        '& td:nth-child(3)': {
            textAlign: 'right'
        }
    },
    heading: {
        marginTop: '1rem',
        marginBottom: '1rem'
    }
  }));

const Profile = ({ height, weight, base_exp, abilities, held_items }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" className={classes.heading}>Profile</Typography>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell><strong>Height</strong></TableCell>
                                            <TableCell>{height}</TableCell>
                                            <TableCell><strong>Weight</strong></TableCell>
                                            <TableCell>{weight}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><strong>Base Experience</strong></TableCell>
                                            <TableCell>{base_exp}</TableCell>
                                            <TableCell><strong>Abilities</strong></TableCell>
                                            <TableCell>{abilities}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><strong>Held items</strong></TableCell>
                                            <TableCell>{held_items}</TableCell>
                                            <TableCell><strong>Abilities</strong></TableCell>
                                            <TableCell>{abilities}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};

function getPoke(state, curPokeId) {
    const pokemons = state.mainReducer.pokemons;
    const values = Object.values(pokemons);
    for (let i = 0; i < values.length; i++) {
      if (values[i].id === curPokeId) return values[i];
    }
  };

function mapStateToProps(state) {
    const curPokeId = state.mainReducer.currentPokemon;
    const pk = getPoke(state, curPokeId);

    const abilities = pk.abilities.length ? pk.abilities.map(el => el.ability.name).join(', ') : 'none';
    const held_items = pk.held_items.length ? pk.held_items.map(el => el.item.name).join(', ') : 'none';
    return { 
        height: pk.height,
        weight: pk.weight,
        base_exp: pk.base_experience,
        abilities,
        held_items
     }
}

const PokeProfile = connect(mapStateToProps)(Profile);

export default PokeProfile;