import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Main } from './components/Main';
import { Login } from './components/Login';
import { Other } from './components/Other';
import './style/general.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='/' element={<Main/>}/>
          <Route path='*' element={<Other/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;