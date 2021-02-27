
import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import TodaySchedule from './TodaySchedule/TodaySchedule'
import Day from './Day/Day';
import Week from './Week/Week';
import './App.css';
import EventPage from './EventPage/EventPage';


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
          component={Day}
        />
        <Route
         path='/week'
         component={Week}
        />
        <Route 
         path='/month'
        />
        <Route
         path='/EventForm'
        />
        <Route 
         path='/event-page'
         component={EventPage}
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
