
import './App.css';
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './components/RecipeDetail';
//router
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/recipes/:recipeId' element={<RecipeDetail/>}/>
      
      </Routes>
      
      </Router>
    
  );
}

export default App;
