import React from 'react';
import './Card'

const Card = ({children}: {children:React.ReactNode}) => {
    return (
        <div className='card'>
            {children}
        </div>
    );
};

export default Card;