import React from 'react';



const Display = props => {
    return (
        <div>
            <div>{props.ballCount} balls out of 4</div>
            <div>{props.strikeCount} strikes out of 3</div>
        </div>
    )
}


export default Display;