import React from 'react'
import { useAppSelector } from '../store/hooks';

const Header = () => {
    const username=useAppSelector(state => state.user.name);

    return <div className="flex">
        <h1>{username}</h1>
    </div>
}

export default Header;
