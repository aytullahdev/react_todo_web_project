import { v4 as uuidv4 } from 'uuid';
export const TaskReducer = (state,action)=>{
   
    switch(action.type){
        case 'ADD_TASK':
            return [...state,{tname:action.task.tname,tdate:action.task.tdate,tdesc:action.task.tdesc,id:uuidv4()}]
        case 'REMOVE_TASK':
            return state.filter(el=>el.id!==action.id)
        default:
            return state;
    };
    
}