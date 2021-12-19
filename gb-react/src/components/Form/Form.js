import React, {useState} from 'react';

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
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}/>
            <input type="submit" />
        </form>
    )
};



export default Form;