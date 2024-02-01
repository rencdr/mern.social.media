import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<HomePage/>} />
    <Route exact path='/auth' element={<AuthPage/>} />

    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
