import './App.css';
import Alltasks from './components/Alltasks';
import Formcomponent from './components/Formcomponent';
import Header from './components/Header';
import TaskContextProveider from './context/TaskContext';


function App() {
  
  return (
    <TaskContextProveider>
    <div>
    <div>
      <Header/>
      
    </div>
    <div className="App  text-white-400 p-2 grid  gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      
      <Formcomponent/>
      <Alltasks/>
  
    </div>
    </div>
    </TaskContextProveider>
  );
}

export default App;
