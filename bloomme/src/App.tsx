import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Importa 'Routes' en lugar de 'Switch'
import { Paths, Quiz, Home, LandingPageView, Login, QuizQuestion, Search, Chat, Register, PathModules, MyProgress, Module, SafeAreaMainView, SafeAreaExercisesView, SafeAreaTaskView} from './views';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPageView/>}/>
        <Route path='/home' element={<div className="body-home"><Home/></div>}/>
        <Route path='/login' element={<div className="body-login"><Login/></div>}/>
        <Route path='/quiz' element={<div className="body-quiz bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0]"><Quiz/></div>} />
        <Route path='/quizQuestion/:category/:categoryId' element={<div className="body-quizQuestion bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0]"><QuizQuestion/></div>}/>
        <Route path='/search' element={<div className="body-search"><Search/></div>}/>
        <Route path='/progress/' element={<div className="body-progress bg-gradient-to-b from-[#f29fb4] to-[#ebc0c0]"><MyProgress/></div>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/paths' element={<Paths />} />
        <Route path='/paths/:name/:id' element={<PathModules />} />
        <Route path='/safearea' element={<SafeAreaMainView/>}/>
        <Route path='/safearea/:exercises' element={<SafeAreaExercisesView/>}/>
        <Route path='/safearea/:exercises/:task' element={<SafeAreaTaskView/>}/>
        <Route path='/module/:id' element={<Module />} />
        <Route path='/quizQuestionModule/:category/:categoryId' element={<div className="body-quizQuestion"><QuizQuestion/></div>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
