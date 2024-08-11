// eslint-disable-next-line no-unused-vars
import React from 'react';
import FieldsList from './components/FieldsLists';
import SkillsList from './components/SkillsLists';

import './App.css';
// In main.js or App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Skill Keeper App</h1>
      </header>
       <div className="col-md-4">
          <button className="btn btn-primary">Click Me</button>
        </div>
      <FieldsList />
            <SkillsList />

    </div>
  );
}

export default App
