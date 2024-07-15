
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';

import Registration from './components/Registration'
import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
