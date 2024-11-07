import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa 'Routes' en lugar de 'Switch'
import { Home } from './views/Home.view';
import { Login } from './views/Login.view';
import { Quiz } from './views/Quiz.view';
import { QuizQuestion } from './views/QuizQuestion.view';
import { Search } from './views/Search.view';
import { LandingPageView } from './views/LandingPage.view';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/landing' element={<LandingPageView/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/quizQuestion' element={<QuizQuestion/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </Router>
  );
};

export default App;
