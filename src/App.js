import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import {History, Home, Library, Populars, Subscribes} from './components';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header>
          <Link to='/'>Youtube</Link>
        </header>
        <section className='content'>
          <div className='content-block'>
            <Link to='/'>Главная</Link>
            <Link to='/populars'>Навигатор</Link>
            <Link to='/subscribes'>Подписки</Link>
            <Link to='/library'>Библиотека</Link>
            <Link to='/history'>История</Link>
            {/* <Link>Смотреть позже</Link>
            <Link>Ваши клипы</Link> */}
          </div>
          <div className='content-block'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/populars' element={<Populars />} />
              <Route path='/subscribes' element={<Subscribes />} />
              <Route path='/library' element={<Library />} />
              <Route path='/history' element={<History />} />
            </Routes>
          </div>
      </section>
      </div>
    </div>
  );
}

export default App;
