import React from 'react';


const Dashboard = props => {
    return (
        <div title='dashboard'>
            <button title='ballBtn' className='ballIncBtn' onClick={props.ballAction}>Ball</button>
            <button title='strikeBtn' className='strikeIncBtn' onClick={props.strikeAction}>Strike</button>
            <button title='foulBtn' className='foulIncBtn' onClick={props.foulAction}>Foul</button>
            <button title='hItBtn' className='hitBtn' onClick={props.hitAction}>Hit</button>
        </div>
    )
}


export default Dashboard;