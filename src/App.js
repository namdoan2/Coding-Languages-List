import React from 'react';
import './App.css';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import RatingList from './components/RatingList';
import Header from './components/Header';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header/>
        <RatingList/>
      </div>
    </DndProvider>
  );
}

export default App;
