import { BrowserRouter, Route, Routes} from 'react-router-dom'
import '../src/assets/App.css';
import Task from './components/Task';
import Create from './components/CreateTask';

function App() {
  return (
    <BrowserRouter>
  <div class='App'>
    <Routes>
      <Route exact path='/' element={<Task/>}/>
      <Route exact path='/create' element={<Create/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
