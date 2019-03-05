import React from 'react';


const Dashboard = props => {
    return (
        <div>
            <button className='ballIncBtn' onClick={props.ballAction}>Ball</button>
            <button className='strikeIncBtn' onClick={props.strikeAction}>Strike</button>
            <button className='foulIncBtn' onClick={props.foulAction}>Foul</button>
            <button className='hitBtn' onClick={props.hitAction}>Hit</button>
        </div>
    )
}


export default Dashboard;