import React from 'react';

import colorTypes from '../../data/color-types';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
    chip: {
        marginRight: '10px',
        textTransform: 'uppercase',
        color: 'white',
    }
});

export default function Types(props) {
    const classes = useStyles();

    const { types } = props;

    return (
        <>
            {types ? types.map((type, i) => {
                const name = type.type.name;
                return (
                <Chip 
                    className={classes.chip}
                    label={name}
                    style={{backgroundColor: `${colorTypes[name]}` }}
                />
                )})
              : ''
            }
        </>
    )
};