import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import CreatePostPage from './pages/CreatePostPage';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<HomePage/>} />
    <Route exact path='/auth' element={<AuthPage/>} />
    <Route exact path='/post' element={<CreatePostPage/>} />


    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
