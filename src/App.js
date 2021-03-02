import { STORE } from './dummy-store';
import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EventsContext from './EventsContext';
import NavBar from './NavBar/NavBar';
import TodaySchedule from './TodaySchedule/TodaySchedule'
import Day from './Day/Day';
import Month from './Month/Month'
import './App.css';
import EventPage from './EventPage/EventPage';


class App extends React.Component {
  state = {
    today: '',
    currentDate: '',
    events: [],
  }

  loadEvents = events => {
    this.setState({
      events: events
    })
  }

  getTodayDate = today => {
    this.setState({
      today: today,
    })
  }

  componentDidMount() {
    let today = new Date().toDateString()
    let events = STORE.events
    this.loadEvents(events)
    this.getTodayDate(today)
  }

  handleAddEvent = event => {
    this.setState({
      events: [...this.state.events, event]
    })
  }

  handleDeleteEvent = eventId => {
    this.setState({
      events: this.state.events.filter(event => event.id !== eventId)
    })
  }

  handleDateSelect = date => {
    this.setState({
      selectedDate: date
    })
  }

  renderRoutes() {
    return (
      <>
        <Route
         exact
         path='/'
         component={TodaySchedule}
        />
        <Route 
         path='/month'
         component={Month}
        />
        <Route 
         path='/day'
         component={Day}
        />
        <Route
         path='/event-form'
        />
        <Route 
         path='/event-page'
         component={EventPage}
        />
      </>
    )
  }

  render() {
    const contextValue = {
      today: this.state.today,
      selectedDate: this.state.selectedDate,
      events: this.state.events,
      addEvent: this.handleAddEvent,      
      deleteEvent: this.handleDeleteEvent
    }
    return (
      <div className="App">
        <EventsContext.Provider value={contextValue}>
        <header className='App__header'>
          <h1>
            <Link to='/'>Calenday</Link>
          </h1>
        </header>
        <main className='App__main'>
            <NavBar />
            {this.renderRoutes()}
        </main>
        </EventsContext.Provider>
      </div>
    );
  }
}

export default App;
