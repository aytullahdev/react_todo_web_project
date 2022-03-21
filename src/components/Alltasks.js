import React, { useContext, useReducer } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskReducer } from '../reducer/TaskReducer';
import Taskcomponent from './Taskcomponent';

const Alltasks = () => {
    const {task,dispatch,islight} = useContext(TaskContext);
    const delTask=(id)=>{

        dispatch({'type':'REMOVE_TASK','id':id})
    }
    return (
        <div className={islight?'flex flex-col space-y-4  py-3':'flex flex-col space-y-4 bg-white py-3'}>
           {task.length>0 && task.map(el=>{
                   return(
                       <Taskcomponent
                           tname={el.tname}
                           tdate={el.tdate}
                           tdesc={el.tdesc}
                           id={el.id}
                           key={el.id}
                           delTask={delTask}
                       />
                   )
               })}
               {!task.length && (<div className='w-2/3 bg-gray-300 mx-auto py-20 text-white text-lg uppercase font-bold'>No task Left</div>)}
        </div>
    );
};

export default Alltasks;