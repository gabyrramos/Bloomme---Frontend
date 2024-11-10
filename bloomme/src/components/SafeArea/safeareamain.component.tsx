import React from 'react';
import SafeAreaHeader from './safeareaheader.component';
import SafeAreaBody from './safeareabody.component';
import '../../styles/SafeArea/safeareaheader.style.css';

const SafeAreaMain: React.FC = () => {
    return (
        <div className="safeareapage">
            <SafeAreaHeader />
            <SafeAreaBody />
        </div>
    );
};

export default SafeAreaMain