import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]


const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <div>Current price: {props.price.toFixed(2)}</div>

            {controls.map(ctrl => {
                console.log(ctrl.label)
                return <BuildControl key={ctrl.label} label={ctrl.label} type={ctrl.type} increase={props.increase} decrease={props.decrease} />
            })}

            <button
                className={classes.OrderButton}
                disabled={props.price <= 4}
                onClick={props.ordered}
            >ORDER NOW</button>

        </div>
    );
}

export default BuildControls;