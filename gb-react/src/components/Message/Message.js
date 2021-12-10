import './Message.scss';

const Message = (props) => {
    return <h3 className="message">{props.msg}<span className="name">{props.name}</span></h3>
}

export default Message;