import React from 'react';

export const Message = ({text, author}) => {
    return (
        <p>{author} : {text}</p>
    );
}
