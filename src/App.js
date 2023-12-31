
import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import CodeForInterview from './components/CodeForInterview';
import Navbar from './components/Navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'        //url based routing
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CodeForInterview/>} />
        <Route path='/all' element={<AllUsers/>} />
        <Route path='/add' element={<AddUser/>} />
        <Route path='/edit/:id' element={<EditUser/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
