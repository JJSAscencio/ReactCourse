import React from "react";
import './Card.css'

const Card = (props) => {

    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div> // props.chidlren allows to use as wrapper component
}

export default Card