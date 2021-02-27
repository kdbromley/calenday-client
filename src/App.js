
import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import TodaySchedule from './TodaySchedule/TodaySchedule'
import './App.css';

class App extends React.Component {

  renderRoutes() {
    return (
      <>
        <Route
         exact
         path='/'
         component={TodaySchedule}
        />
        <Route 
          path='/day'
        />
        <Route
         path='/week'
        />
        <Route 
         path='/month'
        />
        <Route
         path='/EventForm'
        />
      </>
    )
  }

  render() {
    return (
      <div className="App">
        <header className='App__header'>
          <h1>
            <Link to='/'>Calenday</Link>
          </h1>
        </header>
        <main className='App__main'>
            <NavBar />
            {this.renderRoutes()}
        </main>
      </div>
    );
  }
}

export default App;
