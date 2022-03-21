import React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
const Taskcomponent = (props) => {
    const {islight} = useContext(TaskContext)
    return (
        <div>
            <div className='flex justify-center'>
        <div className={islight?'bg-white text-gray-500 shadow-md flex w-2/3  p-2 justify-between':'bg-black text-white shadow-md flex w-2/3  p-2 justify-between'}>
          <div className='text-left space-y-2 w-2/3'>
             <div className='text-center'>
                <h1 className='text-2xl font-semibold uppercase text-center'>{props.tname}</h1>
             </div>
             <div>
               <span className='text-xl'>📅</span> {props.tdate}
             </div>
             <div>
             <p className='text-sm text-left '><span className="mr-2 text-xl">🎯</span>{props.tdesc}</p>

             </div>

          </div>
          <div>
            <span className='cursor-pointer' onClick={()=>{props.delTask(props.id)}}>❌</span>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Taskcomponent;