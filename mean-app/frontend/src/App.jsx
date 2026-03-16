// App.jsx
import React from 'react';
import ResumeForm from './components/ResumeForm';

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resume Generator</h1>
      <ResumeForm />
    </div>
  );
};

export default App;
