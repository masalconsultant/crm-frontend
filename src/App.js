import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.pages';

function App() {
  return (
    <div className="App">
    {/*<Entry />*/}
    <DefaultLayout>Send page component</DefaultLayout>
    </div>
  );
}

export default App;
