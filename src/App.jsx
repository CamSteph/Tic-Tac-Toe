import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import GameSetup from './components/GameSetup';
import PlayPage from './components/PlayPage';
import PageNotFound from './components/PageNotFound';
import { UserProvider } from './containers/UserProvider';

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<UserProvider children={<HomePage />} />} />
            <Route path='/game-setup' element={<UserProvider children={<GameSetup />} />} />
            <Route path='/play' element={<UserProvider children={<PlayPage />} />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
