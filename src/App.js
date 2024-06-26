import { ToastContainer } from 'react-toastify';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/add' element={ <AddContact/>} />
          <Route path='/edit/:id' element={<EditContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
