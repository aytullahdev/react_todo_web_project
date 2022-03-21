import { createContext, useReducer, useEffect, useState } from "react";
import { TaskReducer } from "../reducer/TaskReducer";

export const TaskContext = createContext();
function TaskContextProveider(props){
    const [task,dispatch] = useReducer(TaskReducer,[],()=>{
        const item = JSON.parse(localStorage.getItem('task'));
        if(item){
            return item;
        }else{
            return [];
        }
    });
    const [islight,Setislight] = useState(JSON.parse(localStorage.getItem('mode')));
    useEffect(()=>{
        const item = JSON.parse(localStorage.getItem('mode'));
        if(item){
           Setislight(item);
        }
    },[])
    useEffect(()=>{
       localStorage.setItem('mode',JSON.stringify(islight)); 
        
    },[islight])
    
    const togooleMode = ()=>{
        Setislight(!islight);
        console.log(islight);
       

    }
    
    useEffect(() => {
        localStorage.setItem('task',JSON.stringify(task));
    }, [task])
    return(
        <TaskContext.Provider value={{task,dispatch,togooleMode,islight}}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskContextProveider;