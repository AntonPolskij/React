import React from 'react';
import { AUTHORS } from '../../../utils/constants';

export const Message = ({ author, text, name }) => {
    return (
        <div className={author === AUTHORS.HUMAN ? "human-msg" : "bot-msg"}>
            {author === AUTHORS.HUMAN ? name : author}: {text}
        </div>
    );
};
