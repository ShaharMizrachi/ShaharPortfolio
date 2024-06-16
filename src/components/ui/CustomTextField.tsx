import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#73CDC2', // Default border color
        },
        '&:hover fieldset': {
            borderColor: '#73CDC2', // Hover border color
        },
        '&.Mui-focused fieldset': {
            borderColor: '#73CDC2', // Focused border color
        },

        '& .MuiInputBase-input::placeholder': {
            color: '#FFFFFF', // Placeholder text color
        },
        '& .MuiInputBase-input': {
            color: '#FFFFFF', // Input text color
        },
    },
    '& .MuiInputLabel-root': {
        color: '#FFFFFF', // Label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#FFFFFF', // Focused label color
    },
    margin: '1% 30% 5% ',
});

export default CustomTextField