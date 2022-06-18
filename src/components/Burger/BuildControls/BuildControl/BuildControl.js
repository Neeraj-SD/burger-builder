import React from 'react';

import classes from './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button onClick={() => props.decrease(props.type)} className={classes.Less}>Less</button>
            <button onClick={() => props.increase(props.type)} className={classes.More}>More</button>
        </div>
    );
}

export default buildControl;