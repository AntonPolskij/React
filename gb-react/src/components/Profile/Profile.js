import React, {useCallback} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleShowName } from '../../store/profile/actions';

const Profile = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const setShowName = () => {
        dispatch(toggleShowName);
    }
    return (
        <div className='Profile'>
            <h2>Profile</h2>
            <input type="checkbox" checked={state.showName} onChange={setShowName} />
            {state.showName && <span>{state.name}</span>}
        </div>
    )
}
export default Profile;