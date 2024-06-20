
import React from 'react';
import './GlowingButton.css';

const GlowingButton = ({ onClickLogin }: { onClickLogin: () => void }) => {
    return (
        <button className={'button'} onClick={onClickLogin} >
            <span className={'text'}>LogIn</span>
            <span className={'shimmer'}></span>
        </button>
    );
};

export default GlowingButton;
