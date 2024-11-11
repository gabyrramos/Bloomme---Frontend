import React from 'react';
import SafeAreaHeader from './safeareaheader.component';
import SafeAreaExercisesBody from './safeareaexercisesbody.component';
import '../../styles/SafeArea/safeareaheader.style.css';

const SafeAreaExercises: React.FC = () => {
    return (
        <div className="safeareapage">
            <SafeAreaHeader />
            <SafeAreaExercisesBody />
        </div>
    );
};

export default SafeAreaExercises;