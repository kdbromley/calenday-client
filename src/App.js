
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const contextValue = {}
    return (
      <div className="App">
        <NotesContext.Provider value={contextValue}>
        <header className='App__header'>
          <h1>
            <Link to='/'>Calenday</Link>
          </h1>
          <nav>Nav</nav>
        </header>
        <main className='App__main'>
          
        </main>
        </NotesContext.Provider>
      </div>
    );
  }
}

export default App;
