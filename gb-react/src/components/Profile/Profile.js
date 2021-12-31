import React from 'react';
import Form from '../Form/Form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setName, toggleShowName } from '../../store/profile/actions';
import { selectShowName, selectUserName } from '../../store/profile/selectors';

const Profile = () => {
    const name = useSelector(selectUserName);
    const showName = useSelector(selectShowName);
    const dispatch = useDispatch();
    const setShowName = () => {
        dispatch(toggleShowName);
    }
    const handleSubmit = (newName) => {
        dispatch(setName(newName));
    };
    return (
        <div className='Profile'>
            <h2>Profile</h2>
            <input type="checkbox" checked={showName} onChange={setShowName} />
            {showName && <span>{name}</span>}
            <Form onSubmit={handleSubmit} />
        </div>
    )
}
export default Profile;