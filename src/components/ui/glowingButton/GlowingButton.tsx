// GlowingButton.tsx
import React from 'react';
import './GlowingButton.css';

const GlowingButton = () => {
    return (
        <button className={'button'} >
            <span className={'text'}>Admin</span>
            <span className={'shimmer'}></span>
        </button>
    );
};

export default GlowingButton;
