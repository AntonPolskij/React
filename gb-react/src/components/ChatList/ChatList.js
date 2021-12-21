import React from 'react';
import { List, ListItem } from '@mui/material';

    const ChatList = ({list}) => {
        return ( 
                <List>
             {list.map(({id, name})=> <ListItem alignItems="center" key={id}> {name} </ListItem>)}
                </List>
        );
    }


export default ChatList;