import React, {useState, useRef, useEffect} from 'react';
import { TextField, Button } from '@mui/material';


const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
        onSubmit(value);
    }
    
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    useEffect(() => {
        inputRef.current?.focus();
    }, [onSubmit])
    return (
        <form onSubmit={handleSubmit}>
            <TextField required inputRef={inputRef} sx={{ width: '70%' }} size="small" value={value} onChange={handleChange} />
            <Button variant="contained" type="submit">
                Submit
            </Button>
        </form>
    )
};



export default Form;