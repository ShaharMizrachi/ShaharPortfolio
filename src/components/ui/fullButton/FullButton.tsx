import React from 'react'
import Button from '@mui/material/Button';
// import './FullButton.css'
import styled from '@emotion/styled';

const FullButton = ({ name }: { name: string }) => {
    return (
        <><ButtonStyle variant="contained" content='#73cdc2' >{name}</ButtonStyle></>
    )
}

const ButtonStyle = styled(Button)(({ content }) => ({
    background: content,
    fontFamily: [
    ].join(','),
    '&:hover': {
        backgroundColor: '#73cdc2',

    },

}))

export default FullButton



