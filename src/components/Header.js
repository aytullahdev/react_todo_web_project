import React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const Header = () => {
    const {islight,togooleMode} = useContext(TaskContext)
    return (
        <div>
            <button className={islight?'py-3 px-4 bg-blue-400 text-white text-sm rounded-full block mx-auto my-2 uppercase':'py-3 px-4 bg-black text-white text-sm rounded-full block mx-auto my-2 uppercase'} onClick={()=>{togooleMode()}}>{islight?'light':'Night'}</button>
        </div>
    );
};

export default Header;