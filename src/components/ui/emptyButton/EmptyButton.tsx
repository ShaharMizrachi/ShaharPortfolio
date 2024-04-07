// emptyButton.tsx

import React from 'react';
import Button from '@mui/material/Button';
import './EmptyButton.css'
import styled from '@emotion/styled';
import { hover } from '@testing-library/user-event/dist/hover';

const EmptyButton = ({ name }: { name: string }) => {
    return (
        <><ButtonStyle variant="outlined" content='#73cdc2'>{name}</ButtonStyle></>
    );
};



const ButtonStyle = styled(Button)(({ content, color }) => ({
    color: content,
    border: '2px solid',
}))



export default EmptyButton;

