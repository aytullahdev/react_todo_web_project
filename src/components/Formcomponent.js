import React from 'react';
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';
const Formcomponent = (props) => {
    const {dispatch,islight} = useContext(TaskContext);
    const taskHandeler = ()=>{
        const tname= document.getElementById('taskName').value
        const tdate= document.getElementById('taskDate').value
        const tdesc= document.getElementById('taskDesc').value
        if(tname.length !== 0 && tdate.length!==0 && tdesc.length !==0){
            const temptask = {
                'tname':tname,
                'tdate':tdate,
                'tdesc':tdesc
            }
            dispatch({type:'ADD_TASK',task:temptask});
            
            document.getElementById('taskName').value="";
         document.getElementById('taskDate').value="";
        document.getElementById('taskDesc').value="";
        }else{
            console.log("Plz Fill up all the data");
            
        }
        
    }
    return (
        <div>
        <div className='px-2 w-full '>
        <div className=''>
          <div className={islight?'flex flex-col space-y-2 bg-gray-300 text-black':'flex flex-col space-y-2 bg-black text-black'}>
          {/* TaskName field */}
            <div className=''>
              <div className='bg-blue-400 text-white uppercase py-2'>
                <label htmlFor="taskName" className='text-center'>Enter Task Name: </label>
              </div>
              <div>
                <input type="text" className='w-2/3  mx-20 my-2 py-2 bg-white px-2 outline-none' name='taskName' placeholder='Enter your task Name' id='taskName' />
              </div>
            </div>
            {/* TaskDate field */}
            <div className=''>
              <div className='bg-blue-400 text-white uppercase py-2'>
                <label htmlFor="taskDate" className='text-center'>Enter Task Date: </label>
              </div>
              <div>
                <input type="date" className='w-2/3  mx-20 my-2 py-2 bg-white px-2 outline-none' name='taskDate' id='taskDate' />
              </div>
            </div>
            {/* taskDescription Field */}
            <div className=''>
              <div className='bg-blue-400 text-white uppercase py-2'>
                <label htmlFor="taskDesc" className='text-center'>Task Description: </label>
              </div>
              <div>
                <textarea type="text" className='w-2/3 h-40  mx-20 my-2 py-2 bg-white px-2 outline-none' name='taskDesc' placeholder='Enter your task Description' id='taskDesc' />
              </div>
            </div>
            {/* Button */}
            <div className='flex items-center justify-center py-2'>
              <button className='bg-blue-600 text-white py-3 px-4 uppercase rounded hover:text-gray-200' onClick={()=>{ taskHandeler()}}>Add To List</button>
            </div>
          </div>
        </div>
        

      </div>
            
        </div>
    );
};

export default Formcomponent;