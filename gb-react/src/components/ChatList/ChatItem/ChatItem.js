import { List, ListItem } from '@mui/material';
import { Link } from "react-router-dom";

export const ChatItem = ({ chat, onDelete }) => {
    const handleDelete = () => {
        onDelete(chat.id);
    }
    return <ListItem alignItems="center" key={chat.id}><Link to={`${chat.id}`}>{chat.name}</Link><button onClick={handleDelete}>Delete</button> </ListItem>
}