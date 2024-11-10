import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa 'Routes' en lugar de 'Switch'
import { Paths, Quiz, Home, LandingPageView, Login, QuizQuestion, Search, Chat, Register, PathModules, MyProgress, Module, SafeAreaMainView} from './views';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/landing' element={<LandingPageView/>}/>
        <Route path='/home' element={<div className="body-home"><Home/></div>}/>
        <Route path='/login' element={<div className="body-login"><Login/></div>}/>
        <Route path='/quiz' element={<div className="body-quiz"><Quiz/></div>} />
        <Route path='/quizQuestion/:category' element={<div className="body-quizQuestion"><QuizQuestion/></div>}/>
        <Route path='/search' element={<div className="body-search"><Search/></div>}/>
        <Route path='/progress' element={<div className="body-progress"><MyProgress/></div>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/paths' element={<Paths />} />
        <Route path='/paths/:id' element={<PathModules />} />
        <Route path='/safearea' element={<SafeAreaMainView/>}/>
        <Route path='/module/:id' element={<Module />} />
      </Routes>
    </Router>
  );
};

export default App;
