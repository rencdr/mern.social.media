import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import CreatePostPage from './pages/CreatePostPage';

function App() {
  const userId = localStorage.getItem('userId');

  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={userId ? <HomePage /> : <AuthPage />} />
    <Route exact path='/auth' element={<AuthPage/>} />
    <Route exact path='/post' element={<CreatePostPage/>} />


    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
