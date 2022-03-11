import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import ArticleList from './pages/ArticleList'
import NotFound from './pages/NotFound'

//Components
import NavBar from './components/NavBar';


function App() {
  return( 
    <Router>
      <NavBar />
     <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
         <Route exact path='/' element={<Home />} />
         <Route exact path='/about' element={<About />} />
         <Route exact path='/article-list' element={<ArticleList />} />
         <Route exact path='/article/:name' element={<Article />} />
         <Route path='*' element={<NotFound />}  />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
