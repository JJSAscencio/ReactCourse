import React from "react";

const User = (props) => {
    return (
        <li>
            <div>
                <div>
                    <p>{props.name} {props.age} years old</p>
                </div>
            </div>
        </li>
    )
}

export default User