import React, { useState } from 'react';
import { connect } from 'react-redux';

import { loadMove } from '../../redux/actions/pokemon';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import pokeball from '../../img/pokeball.gif';

import MoveContent from '../MoveContent';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    title: {
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    pokeball: {
        width: '30px',
        height: '30px',
        marginRight: '1rem',
    }
}));

function MovePanel({ move, loadMove, loadingMove, currentMove }) {
    const classes = useStyles();

    const { name } = move.move;

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel, name) => (event, isExpanded) => {
        if (isExpanded) loadMove(name.name);
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <ExpansionPanel expanded={expanded === name} onChange={handleChange(name, {name})} style={{width:'100%'}}>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>{name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Typography>
                {
                    loadingMove
                    ? <div style={{display: 'flex'}}>
                        <img alt={pokeball} className={classes.pokeball} src={pokeball}></img>
                        <Typography>Loading...</Typography>
                      </div>
                    : ''
                }
                {
                    currentMove.name === name 
                    ? <MoveContent />
                    : '' 
                }
            </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
};

function mapStateToProps(state) {

    return {
        loadingMove: state.pokemonReducer.loadingMove,
        currentMove: state.pokemonReducer.currentMove
    }
}

const Move = connect(mapStateToProps, { loadMove })(MovePanel);

export default Move;