import React from 'react';

type ButtonStyleProps={
    btnStyle:React.CSSProperties
}

const ButtonStyle = (props:ButtonStyleProps) => {
    return (
        <div>
            <h2 style={props.btnStyle}>ButtonStyle</h2>
        </div>
    );
};

export default ButtonStyle;